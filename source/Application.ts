import { createRenderer, Renderer } from "@lucania/lumina";
import { AssetManager } from "@lucania/toolbox/client";
import { Clock, Color, Data } from "@lucania/toolbox/shared";
import { StateManager } from "states/StateManager.js";

export type ApplicationOptions = {
    name: string,
    window: Window,
    canvas: string | HTMLCanvasElement
};

export abstract class Application {

    public readonly window: Window;
    public readonly name: string;
    public readonly canvas: HTMLCanvasElement;

    public readonly clock: Clock;
    public readonly assets: AssetManager;
    public readonly states: StateManager;
    public readonly renderer: Renderer;

    public constructor(options: ApplicationOptions) {
        this.window = options.window;
        this.name = options.name;
        if (typeof options.canvas === "string") {
            const retrievedCanvas = this.window.document.getElementById(options.canvas);
            Data.assert(retrievedCanvas !== null, `Failed to find canvas element with ID "${options.canvas}" in DOM.`);
            Data.assert(
                retrievedCanvas instanceof HTMLCanvasElement,
                `Expected element with ID "${options.canvas}" to be a ${HTMLCanvasElement.name}, but got a ${retrievedCanvas.constructor.name}.`
            );
            this.canvas = retrievedCanvas;
        } else {
            this.canvas = options.canvas;
        }

        this.clock = new Clock();
        this.assets = new AssetManager();
        this.states = new StateManager();
        this.renderer = createRenderer(options.window, { clearColor: Color.BLACK });

        this._run();
    }

    public abstract initialize(): Promise<void>;

    public abstract update(deltaTime: number): void;

    public abstract terminate(): Promise<void>;

    private async _initialize(): Promise<void> {
        await this.renderer.initialize(this.canvas);
    }

    private _update(deltaTime: number): void {
        this.renderer.begin();
        this.update(deltaTime);
        this.renderer.end();
    }

    private async _terminate(): Promise<void> { }


    private async _run(): Promise<void> {
        await this._initialize();
        await this.initialize();
        let lastFrameTime: DOMHighResTimeStamp | undefined;
        const requestNextFrame = (currentTime?: DOMHighResTimeStamp): void => {
            if (currentTime !== undefined && lastFrameTime !== undefined) {
                const deltaTime = currentTime - lastFrameTime;
                this._update(deltaTime);
            }
            this.window.requestAnimationFrame(requestNextFrame);
            lastFrameTime = currentTime;
        };
        requestNextFrame();
    }

}
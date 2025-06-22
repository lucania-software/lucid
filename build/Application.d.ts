import { Renderer } from "@lucania/lumina";
import { AssetManager } from "@lucania/toolbox/client";
import { Clock } from "@lucania/toolbox/shared";
import { StateManager } from "states/StateManager.js";
export type ApplicationOptions = {
    name: string;
    window: Window;
    canvas: string | HTMLCanvasElement;
};
export declare abstract class Application {
    readonly window: Window;
    readonly name: string;
    readonly canvas: HTMLCanvasElement;
    readonly clock: Clock;
    readonly assets: AssetManager;
    readonly states: StateManager;
    readonly renderer: Renderer;
    constructor(options: ApplicationOptions);
    abstract initialize(): Promise<void>;
    abstract update(deltaTime: number): void;
    abstract terminate(): Promise<void>;
    private _initialize;
    private _update;
    private _terminate;
    private _run;
}
//# sourceMappingURL=Application.d.ts.map
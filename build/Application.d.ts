import { Clock } from "@lucania/toolbox/shared";
import { AssetManager } from "@lucania/toolbox/client";
import { Renderer } from "./graphics/Renderer";
import { StateManager } from "./states/StateManager";
export declare class Application {
    canvas: HTMLCanvasElement;
    clock: Clock;
    assets: AssetManager;
    states: StateManager;
    renderer: Renderer;
    private _running;
    private _gameTask?;
    constructor(canvas: HTMLCanvasElement);
    initialize(): Promise<void>;
    terminate(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
    update(deltaTime: number): void;
    get running(): boolean;
}

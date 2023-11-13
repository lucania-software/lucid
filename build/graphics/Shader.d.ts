import { Renderer } from "./Renderer";
export declare class Shader {
    readonly renderer: Renderer;
    readonly entryPoint: string;
    private readonly _handle;
    constructor(renderer: Renderer, sourceCode: string, entryPoint: string);
}

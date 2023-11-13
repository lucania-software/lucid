/// <reference types="dist" />
import { Renderer } from "./Renderer";
import { Shader } from "./Shader";
export type VertexFormat = GPUVertexFormat;
export declare class VertexShader extends Shader {
    static readonly FORMAT_REGEX: RegExp;
    private _attributes;
    private _stride;
    constructor(renderer: Renderer, sourceCode: string, entryPoint: string);
    addAttribute(name: string, format: VertexFormat): number;
    get stride(): number;
    get attributes(): GPUVertexAttribute[];
    createVertexState(): GPUVertexState;
}

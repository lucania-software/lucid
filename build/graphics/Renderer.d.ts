/// <reference types="dist" />
import { Color } from "@lucania/toolbox/shared";
export interface RendererOptions {
    clearColor: Color;
}
export declare class Renderer {
    static readonly DEFAULT_OPTIONS: RendererOptions;
    private _context?;
    private _device?;
    private _preferredCanvasFormat;
    clearColor: Color;
    constructor(options?: RendererOptions);
    initialize(context: GPUCanvasContext): Promise<void>;
    get underlying(): {
        device: GPUDevice;
        context: GPUCanvasContext;
        preferredCanvasFormat: GPUTextureFormat;
    };
    get aspectRatio(): number;
}

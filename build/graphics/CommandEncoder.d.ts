import { Color } from "@lucania/toolbox/shared";
import { RenderPassEncoder } from "./RenderPassEncoder";
import { Renderer } from "./Renderer";
import { Texture } from "./Texture";
export declare class CommandEncoder {
    readonly renderer: Renderer;
    private _handle;
    constructor(renderer: Renderer);
    beginRenderPass(clearColor: Color, texture?: Texture): RenderPassEncoder;
    endRenderPass(renderPassEncoder: RenderPassEncoder): void;
    submit(): void;
}

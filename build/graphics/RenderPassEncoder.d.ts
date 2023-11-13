import { BindGroup, Pipeline } from "..";
import { Model } from "./Model";
export declare class RenderPassEncoder {
    private _handle;
    private constructor();
    render(pipeline: Pipeline, bindGroup: BindGroup, model: Model): void;
    private static create;
}

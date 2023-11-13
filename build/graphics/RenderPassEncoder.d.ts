import { BindGroup } from "./BindGroup";
import { Model } from "./Model";
import { Pipeline } from "./Pipeline";
export declare class RenderPassEncoder {
    private _handle;
    private constructor();
    render(pipeline: Pipeline, bindGroup: BindGroup, model: Model): void;
    private static create;
}

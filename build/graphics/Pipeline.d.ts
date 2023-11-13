import { FragmentShader } from "./FragmentShader";
import { Renderer } from "./Renderer";
import { VertexShader } from "./VertexShader";
import { Buffer } from "./Buffer";
import { BindGroup } from "./BindGroup";
export declare class Pipeline {
    readonly renderer: Renderer;
    readonly vertexShader: VertexShader;
    readonly fragmentShader: FragmentShader;
    private readonly _handle;
    constructor(renderer: Renderer, vertexShader: VertexShader, fragmentShader: FragmentShader);
    render(buffer: Buffer, bindGroups: BindGroup[]): void;
}

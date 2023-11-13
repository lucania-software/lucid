import { Tuple2, Vector2, VectorSource } from "@lucania/vectorics";
import { Renderer } from "./Renderer";
export type TextureSource = ImageBitmap | HTMLVideoElement | HTMLCanvasElement | OffscreenCanvas;
export type FilterMode = "linear" | "nearest";
export declare class Texture {
    readonly renderer: Renderer;
    readonly dimensions: Vector2;
    private readonly _handle;
    /**
     * @param renderer
     * @param usage @see {@link Texture.USAGE}
     * @param dimensions
     */
    constructor(renderer: Renderer, usage: number, dimensions: VectorSource<Tuple2>);
    static readonly USAGE: {
        readonly COPY_SOURCE: number;
        readonly COPY_DESTINATION: number;
        readonly TEXTURE_BINDING: number;
        readonly STORAGE_BINDING: number;
        readonly RENDER_ATTACHMENT: number;
    };
    static create(renderer: Renderer, usage: number, source: TextureSource): Texture;
}

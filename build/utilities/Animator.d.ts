import { Tuple2, Vector2, Vector4, VectorSource } from "@lucania/vectorics";
/**
 * The meta information describing an animation controlled by {@link Animator}.
 */
export type AnimationMeta = {
    first: number;
    last: number;
    frameRate?: number;
};
/**
 * A mapping of animation names to {@link AnimationMeta}s
 */
export type AnimationMap = {
    [Name: string]: AnimationMeta;
};
/**
 * Controls the animation of a spritesheet by providing dynamic texture coordinates.
 */
export declare class Animator<Map extends AnimationMap> {
    readonly sheetSize: Vector2;
    readonly spriteSize: Vector2;
    readonly spriteGrid: Vector2;
    private _frameTime;
    private _remainingFrameTime;
    private _currentSpriteIndex;
    private _animations;
    private _currentAnimationName;
    /**
     * @param sheetSize The size of the spritesheet to animate in pixel coordinates.
     * @param spriteSize The size of a single sprite in pixel coordinates.
     * @param animations A mapping of names to {@link AnimationMeta}s.
     * @see {@link AnimationMap}.
     */
    constructor(sheetSize: VectorSource<Tuple2>, spriteSize: VectorSource<Tuple2>, animations: Map);
    get spriteIndex(): number;
    set currentAnimation(name: string);
    /**
     * Gets the default frame rate for this animator.
     *
     * @note This value will only be used by animations that do not have their own frameRate value set.
     */
    get frameRate(): number;
    /**
     * Sets the default frame rate for this animator.
     *
     * @note This value will only be used by animations that do not have their own frameRate value set.
     */
    set frameRate(value: number);
    /**
     * Checks for required frame updates to pursue the current animations desired frame rate.
     * @param deltaTime The time since last frame. Supplied by the {@link Application}.
     */
    update(deltaTime: number): void;
    /**
     * @returns The meta information about the current animation.
     * @see {@link Animator.getAnimationMeta} for more information.
     */
    getCurrentAnimationMeta(): AnimationMeta;
    /**
     * Gets the meta information about an animation by name.
     * @param name The name of the animation.
     * @returns The meta information of the registered animation specified by "name".
     * @see {@link AnimationMeta}
     */
    getAnimationMeta(name: keyof Map): Map[keyof Map];
    /**
     * Gets the pixel coordinate bounds of a sprite within the sheet.
     * @param spriteIndex The index of the sprite to get the bounds of within the sheet. Do not specify to get the bounds of the current sprite of the animation.
     * @returns The coordinate bounds (x, y, width, height) of the sprite in pixel coordinates.
     */
    getPixelBounds(spriteIndex?: number): Vector4;
    /**
     * Gets the UV coordinate of a sprite within the sheet.
     * @param spriteIndex The index of the sprite to get the bounds of within the sheet. Do not specify to get the bounds of the current sprite of the animation.
     * @returns The texture coordinates bounds (x, y, width, height) of the sprite in UV coordinates.
     */
    getTextureBounds(spriteIndex?: number): Vector4;
    getTextureCoordinates(spriteIndex?: number): number[];
}
//# sourceMappingURL=Animator.d.ts.map
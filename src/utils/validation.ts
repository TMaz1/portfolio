import type { ContentImage } from "../types/content";

export const isValidImage = (image: ContentImage | null | undefined): image is ContentImage => {
    return Boolean(
        image &&
        typeof image.src === "string" &&
        image.src.trim() &&
        typeof image.alt === "string",
    );
}

export const isValidUrl = (url: string | null | undefined): boolean => {
    if (!url) return false;

    try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
    } catch {
        return false;
    }
};
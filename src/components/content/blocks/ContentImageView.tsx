import type { ContentImage } from "../../../types/content";
import { isValidImage } from "../../../utils/validation";

type ContentImageViewProps = {
    image: ContentImage;
    className?: string;
};

export function ContentImageView({
    image,
    className,
}: ContentImageViewProps) {
    if (!isValidImage(image)) {
        return null;
    }

    const classes = [
        "content-image",
        `content-image--${image.ratio ?? "auto"}`,
        `content-image--${image.crop ?? "cover"}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <figure className={classes}>
            <div className="content-image__frame">
                <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                />
            </div>

            {image.caption ? (
                <figcaption className="content-image__caption">
                    {image.caption}
                </figcaption>
            ) : null}
        </figure>
    );
}
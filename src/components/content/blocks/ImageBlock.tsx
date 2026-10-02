import type { ContentImage } from "../../../types/content";
import { isValidImage } from "../../../utils/validation";
import { ContentImageView } from "./ContentImageView";

type ImageBlockProps = {
	image: ContentImage;
};

export function ImageBlock({ image }: ImageBlockProps) {
	if (!isValidImage(image)) {
		return null;
	}

	return <ContentImageView image={image} />;
}
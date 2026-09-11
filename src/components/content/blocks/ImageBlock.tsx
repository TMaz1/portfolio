export function ImageBlock({
	src,
	alt,
	caption,
}: {
	src: string;
	alt: string;
	caption?: string;
}) {
	return (
		<figure className="content-block content-image">
			<img src={src} alt={alt} loading="lazy" />
			{caption ? <figcaption>{caption}</figcaption> : null}
		</figure>
	);
}
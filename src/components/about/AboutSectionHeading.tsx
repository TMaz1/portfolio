import type { AboutSectionHeadingContent } from "../../content/about/types";

type AboutSectionHeadingProps = {
    content: AboutSectionHeadingContent;
    titleId: string;
};

export function AboutSectionHeading({
    content,
    titleId,
}: AboutSectionHeadingProps) {
    return (
        <div className="about-section-heading">
            <div className="section-number">{content.number}</div>

            <div>
                <h2 className="section-title" id={titleId}>
                    {content.title.lines.map((line, index) => (
                        <span key={`${line}-${index}`}>
                            {line}
                            {index < content.title.lines.length - 1 ? <br /> : null}
                        </span>
                    ))}

                    {content.title.emphasis ? (
                        <span className="section-title__emphasis">
                            {content.title.emphasis}
                        </span>
                    ) : null}
                </h2>

                <p className="section-intro">{content.intro}</p>
            </div>
        </div>
    );
}
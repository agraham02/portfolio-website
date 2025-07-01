import { timelineData } from "./timelineData";
import { Timeline } from "@/components/ui/timeline";
import ImageGrid from "@/components/ui/image-grid";

export default function TimelineSection() {
    return (
        <div className="w-full">
            <Timeline
                data={timelineData.map((entry) => ({
                    title: entry.title,
                    content: (
                        <div>
                            {entry.paragraphs.map((text, i) => (
                                <p
                                    key={i}
                                    className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-normal mb-8 leading-relaxed whitespace-pre-line"
                                >
                                    {text}
                                </p>
                            ))}
                            <ImageGrid images={entry.images} />
                        </div>
                    ),
                }))}
            />
        </div>
    );
}

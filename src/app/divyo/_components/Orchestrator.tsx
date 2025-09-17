"use client";
import { useCallback, useState } from "react";
import { LayoutGroup } from "motion/react";
import Hero from "./Hero";
import StickyStory from "./StickyStory";

export default function Orchestrator() {
    const [stickyInView, setStickyInView] = useState(false);
    const handleInViewChange = useCallback(
        (inView: boolean) => setStickyInView(inView),
        []
    );

    return (
        <LayoutGroup id="phone">
            <Hero showPhone={!stickyInView} />
            <StickyStory
                showPhone={stickyInView}
                onInViewChange={handleInViewChange}
            />
        </LayoutGroup>
    );
}

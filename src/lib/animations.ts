// Shared animation helpers for motion/react components
// Ensures consistent, smooth tween-based animations (no spring bounce)

export type FadeInUpOptions = {
    i?: number; // index for staggering
    distance?: number; // initial Y offset
    duration?: number; // animation duration
    delayPerIndex?: number; // delay multiplier per index
    viewportAmount?: number; // how much of the element should be in view to trigger
};

export const fadeInUp = (options: FadeInUpOptions = {}) => {
    const {
        i = 0,
        distance = 20,
        duration = 0.5,
        delayPerIndex = 0.1,
        viewportAmount = 0.25,
    } = options;

    return {
        initial: { opacity: 0, y: distance },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: viewportAmount },
        transition: {
            type: "tween",
            ease: "easeOut",
            duration,
            delay: i * delayPerIndex,
        },
    } as const;
};

/** Everything the Tono landing page says, in one place. */

export const TONO_EMAIL = "ahmadgrahamdev@gmail.com";
export const TONO_LAUNCH_MAILTO = `mailto:${TONO_EMAIL}?subject=${encodeURIComponent("Tono launch")}`;

/** One key per chapter, in order. A real screenshot named NN-key.png (see TONO_SCREENSHOTS.md) replaces that chapter's drawn screen. */
export const CHAPTER_KEYS = ["today", "record", "words", "voice", "presence", "felt", "practice", "coach", "privacy"] as const;
export type ChapterKey = (typeof CHAPTER_KEYS)[number];

/** Screenshot files found at build time, by chapter. `dark` is optional. */
export type Screenshots = Partial<Record<ChapterKey, { light: string; dark?: string }>>;

export type Chapter = {
    /** Short label shown in the counter, e.g. "Record". */
    label: string;
    title: string;
    body: string;
    /** A one-line aside under the body. */
    note: string;
};

/**
 * The story told while the phone travels down the page. The first chapter is
 * the hero (its own layout in Story.tsx), so only its label is used.
 */
export const STORY: Chapter[] = [
    { label: "Today", title: "", body: "", note: "" },
    {
        label: "Record",
        title: "Record a short answer.",
        body: "Pick a prompt, or just talk, for one to five minutes. The front camera frames you and your phone listens.",
        note: "No setup. No account.",
    },
    {
        label: "Words",
        title: "Every um, counted.",
        body: "A speech model on your phone writes down exactly what you said, fillers included, with a time on every word.",
        note: "Transcribed on the device.",
    },
    {
        label: "Voice",
        title: "Your pace, and your pauses.",
        body: "Words per minute across the take, and every silence, so you can tell a pause that lands a point from one that stalls.",
        note: "Pitch and loudness too.",
    },
    {
        label: "Presence",
        title: "Where your eyes go.",
        body: "The camera tracks your gaze and head, so you can see how much of the take you spent looking at the lens.",
        note: "Measured by the camera, never sent anywhere.",
    },
    {
        label: "Felt vs. seen",
        title: "Felt like a 3. Looked like a 4.",
        body: "Rate how it felt before you watch, then again after. The gap is usually kinder than you expect.",
        note: "Rate it before you watch.",
    },
    {
        label: "Practice",
        title: "Then one thing to fix.",
        body: "Tono picks today's focus from five skills and builds a short session around it. Do the rep, record again, watch the number move.",
        note: "Streaks with rest days and freezes.",
    },
    {
        label: "AI coach",
        title: "A coach, if you want one.",
        body: "Add your own key and an AI coach reads the take: is it structured, did you answer the question, does your tone match your words?",
        note: "Optional. Always asked first.",
    },
    {
        label: "Privacy",
        title: "It stays on your phone.",
        body: "Recordings, transcripts and measurements live on the device. No account, no ads, no tracking. Nothing leaves unless you turn on AI reviews.",
        note: "The speech model downloads once.",
    },
];

export type Skill = {
    id: "articulation" | "cadence" | "impromptu" | "confidence" | "conversation";
    name: string;
    line: string;
};

/** The five skills practice is organised around. */
export const SKILLS: Skill[] = [
    { id: "articulation", name: "Articulation", line: "Crisp, clear words" },
    { id: "cadence", name: "Cadence", line: "Pace, pauses and rhythm" },
    { id: "impromptu", name: "Impromptu", line: "Thinking on your feet" },
    { id: "confidence", name: "Confidence", line: "Presence on camera" },
    { id: "conversation", name: "Conversation", line: "Stop rambling, stop blanking" },
];

export const PRACTICE_EXTRAS: string[] = [
    "A short plan for today, built around the skill you need most",
    "Reminders at the times you choose, that skip themselves once you've practiced",
    "Streaks with rest days and freezes, so one missed day doesn't undo a month",
    "A countdown to an interview or talk, with practice that builds toward it",
    "Rewind: tell your day out loud in two minutes",
    "Talk back: answer the inner critic with something fairer",
];

export const STAYS_ON_PHONE: string[] = [
    "Your videos and audio",
    "The transcript, word by word",
    "Pace, pauses, pitch and loudness",
    "Eye contact and expression, as numbers",
    "Scores, streaks and your history",
    "Your name and what you tell the app",
];

export const LEAVES_ONLY_IF_YOU_CHOOSE: { what: string; where: string }[] = [
    { what: "The video, for a Gemini review", where: "Google, with your key" },
    { what: "Transcript and measurements, for an OpenAI, Claude or OpenRouter review", where: "That provider, with your key" },
    { what: "The speech model, downloaded once", where: "Hugging Face, no personal data" },
];

export const FAQ: { question: string; answer: string }[] = [
    {
        question: "When is it coming out?",
        answer: "Soon. Tono is coming first to iPhone. Email me and I'll let you know the day it's ready.",
    },
    {
        question: "Does it cost anything?",
        answer: "Tono itself is free. The optional AI coach uses your own API key, and the provider bills your account directly, usually a few cents per review.",
    },
    {
        question: "Do my recordings get uploaded?",
        answer: "No. Your videos, transcripts and scores stay on your phone. They leave only if you turn on AI reviews, and then only to the provider you chose, never through a server of mine.",
    },
    {
        question: "Does it work without an AI key?",
        answer: "Yes. Pace, fillers, pauses, voice, eye contact, the transcript and your daily practice all work without one. The AI coach adds judgement calls a phone can't make, like whether your answer made sense.",
    },
    {
        question: "What does it need?",
        answer: "An iPhone running iOS 17 or later. The first time you open it, Tono downloads a speech model of about 570 MB, so use Wi-Fi.",
    },
    {
        question: "Who makes it?",
        answer: "Ahmad Graham, an independent developer. You can read the privacy policy and terms below, and reach me at the email on this page.",
    },
];

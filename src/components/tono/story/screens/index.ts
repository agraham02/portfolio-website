import type { ComponentType } from "react";
import { PresenceScreen, RecordScreen } from "./CaptureScreens";
import { CoachScreen, PracticeScreen, TodayScreen } from "./HomeScreens";
import { FeltScreen, PrivacyScreen, VoiceScreen, WordsScreen } from "./ReviewScreens";

/** The phone's screen for each chapter of STORY, in the same order. */
export const SCREENS: ComponentType[] = [
    TodayScreen,
    RecordScreen,
    WordsScreen,
    VoiceScreen,
    PresenceScreen,
    FeltScreen,
    PracticeScreen,
    CoachScreen,
    PrivacyScreen,
];

# Tono: real screenshots for the phone

The `/tono` page draws each of the phone's nine screens by hand. Real screenshots replace them automatically, one chapter at a time, as soon as the files are in the right place. Nothing else needs changing.

## How to add them

1. Take an iPhone screenshot (side button + volume up) of each screen below.
2. Save the PNGs into `public/tono/screens/` with exactly these names.
3. Commit and deploy. The page finds them at build time.

A chapter with no file keeps its drawn screen, so you can add them gradually.

| File | Chapter | What to capture |
|---|---|---|
| `00-today.png` | Hero | The **Today** tab with a plan showing. Set your name first (Settings) and have a streak and a step or two ticked. |
| `01-record.png` | Record | The **recording screen** with the prompt visible, the face guide on, and the timer running. Your face will be visible, so if you would rather it wasn't, capture it just before you press record. |
| `02-words.png` | Words | A **result** showing the transcript with the filler words marked. Use a take with a few ums and uhs. |
| `03-voice.png` | Voice | The same result, scrolled to the **pace and pauses** section (the pace line, words per minute, pauses). |
| `04-presence.png` | Presence | The result's **eye contact / presence** section. The face check in setup also works. |
| `05-felt.png` | Felt vs. seen | The **Felt vs observed** card with both ratings answered, so the gap message shows. |
| `06-practice.png` | Practice | The screen showing your **skills and this week's practice** (the You / progress tab). |
| `07-coach.png` | AI coach | The **AI review** notes on a take reviewed with a Gemini or other key (summary, strength, focus). |
| `08-privacy.png` | Privacy | **Settings, Coaching & AI**, with transcription showing the on-device model as ready. |

### Optional: dark mode

Add `-dark` to a name (for example `02-words-dark.png`) and it is shown when the visitor's page is in dark mode. If only the light file exists, it is used for both.

## Tips

- **Use a build without the Dev tab.** TestFlight builds from the `testflight` profile have dev tools on, so a Dev tab appears in the tab bar. Screenshots from a `production` build (or a build with `EXPO_PUBLIC_DEV_TOOLS` unset) won't have it.
- **Original size.** iPhone screenshots work as they are (about 1179 by 2556); the page scales them. Don't crop.
- **Nothing personal.** The screens will be public. Use a neutral name, and check transcripts, prompts and notes for anything you wouldn't want on a website.
- **Same take throughout.** Using one take for chapters 02 to 07 keeps the story consistent: the transcript, the pace and the score all agree.
- The status bar (time, battery) is part of the screenshot. A clean 9:41 and full battery looks best, but isn't required.

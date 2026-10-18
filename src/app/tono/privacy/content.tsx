import { A, B, H3, P, UL, type LegalSection } from "@/components/tono/LegalDocument";
import { TONO_EMAIL } from "@/components/tono/content";

export const EFFECTIVE = "October 17, 2026";

export const INTRO = (
    <>
        <P>
            Tono is a speaking-practice app made by Ahmad Graham (&quot;I&quot;, &quot;me&quot;). This policy explains what Tono does with your
            information. I wrote it to be read, so it is plain on purpose.
        </P>
    </>
);

const PROVIDER_POLICIES: { name: string; href: string }[] = [
    { name: "Google", href: "https://policies.google.com/privacy" },
    { name: "OpenAI", href: "https://openai.com/policies/privacy-policy" },
    { name: "Anthropic", href: "https://www.anthropic.com/privacy" },
    { name: "OpenRouter", href: "https://openrouter.ai/privacy" },
    { name: "Hugging Face", href: "https://huggingface.co/privacy" },
    { name: "Apple", href: "https://www.apple.com/legal/privacy/" },
];

export const SECTIONS: LegalSection[] = [
    {
        id: "short-version",
        title: "The short version",
        body: (
            <UL>
                <li>
                    <B>Your recordings stay on your phone.</B> Your videos, transcripts, scores, face and voice measurements, and settings are
                    stored on your device. I do not run any servers that receive them.
                </li>
                <li>
                    <B>Nothing is sent anywhere unless you turn on AI reviews.</B> If you do, Tono sends data straight from your phone to the AI
                    company you choose, using your own account key. It never passes through me.
                </li>
                <li>
                    <B>No account, no ads, no analytics, no tracking</B> in the app. I do not know who you are or how you use it.
                </li>
                <li>
                    <B>You can delete everything</B> from Settings, or by deleting the app.
                </li>
            </UL>
        ),
    },
    {
        id: "contact",
        title: "Who to contact",
        body: (
            <P>
                Questions, or anything you want to know about this policy: <A href={`mailto:${TONO_EMAIL}`}>{TONO_EMAIL}</A>
            </P>
        ),
    },
    {
        id: "on-your-phone",
        title: "What stays on your phone",
        body: (
            <>
                <P>Tono stores the following on your device only:</P>
                <UL>
                    <li>
                        <B>Recordings:</B> the videos you record, and the audio in them.
                    </li>
                    <li>
                        <B>Transcripts and measurements:</B> the text of what you said, how fast you spoke, your pauses and filler words, your
                        pitch and loudness, and scores built from them.
                    </li>
                    <li>
                        <B>Face measurements:</B> while you record, Tono uses your camera to measure things like where you are looking, head
                        position, and expression. This is calculated on your phone, saved as numbers, and used only to give you feedback. Tono
                        does not identify or recognize you, and does not build a face profile.
                    </li>
                    <li>
                        <B>What you tell Tono:</B> your name, goals, what gets in your way, any event you are preparing for, how comfortable
                        you feel speaking, and anything you write in the app (for example in Talk back, Rewind, or your &quot;why&quot;).
                    </li>
                    <li>
                        <B>Your progress:</B> streaks, practice history, and reminders you set.
                    </li>
                    <li>
                        <B>Your AI provider key</B>, if you add one. It is kept in the iPhone Keychain.
                    </li>
                </UL>
                <P>
                    Tono asks for permission to use the <B>camera</B>, <B>microphone</B> and <B>speech recognition</B>. You can change these at
                    any time in iOS Settings. The app needs the camera and microphone to record, and works best with all three.
                </P>
                <H3>On-device processing</H3>
                <P>
                    Turning your speech into text and analyzing your voice and face happens on your phone, using a speech model that you
                    download once. No audio or video is uploaded for this. Where your iPhone supports it, Tono&apos;s coaching text can also be
                    written by Apple Intelligence, which runs on the device.
                </P>
            </>
        ),
    },
    {
        id: "leaves-your-phone",
        title: "What leaves your phone, and only when you choose",
        body: (
            <>
                <H3>1. AI reviews (optional)</H3>
                <P>
                    If you add an API key and allow it, Tono can ask an AI service for a deeper review of a take. Which data is sent depends on
                    the provider you pick:
                </P>
                <div className="overflow-x-auto rounded-2xl ring-1 ring-border">
                    <table className="w-full min-w-[32rem] text-left text-sm">
                        <thead className="bg-muted/60">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Provider
                                </th>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    What is sent for a review
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-t border-border">
                                <td className="px-4 py-3 align-top font-medium text-foreground">Google Gemini</td>
                                <td className="px-4 py-3">The video of the take, including its audio</td>
                            </tr>
                            <tr className="border-t border-border">
                                <td className="px-4 py-3 align-top font-medium text-foreground">OpenAI, Anthropic Claude, OpenRouter</td>
                                <td className="px-4 py-3">
                                    The transcript, the timing of your pauses, and the measurements your phone made (pace, pitch, loudness, eye
                                    contact, expression). Never the video or audio.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <P>
                    With every review, Tono also sends the prompt or script you were answering. Unless you switch it off in Settings, it also
                    sends a short note about you so the feedback fits: where you want to speak better, what gets in your way, any upcoming
                    event (including any note you wrote about it), your training and comfort level, whether English is your first language,
                    and any note you wrote about your voice. It does not send your name, your &quot;why&quot;, or your Talk back entries. If you tell
                    Tono you stutter, the review is also told to judge your speech accordingly.
                </P>
                <P>Rewind reviews send only the words of that Rewind, never audio or video.</P>
                <P>
                    Tono asks for your permission before the first review with each provider, and you can turn reviews off, or choose a
                    different provider, at any time.
                </P>
                <P>
                    <B>This data goes from your phone to the provider, under your own account and key.</B> It does not pass through any server
                    of mine. The provider&apos;s terms and privacy policy govern what happens to it there. Some providers keep requests for a
                    period, and the rules can differ by plan: for example, a free-tier key may allow the provider to use your data to improve
                    its products, while a paid key usually does not. Check the policy for the key you use. Google&apos;s Gemini service deletes
                    uploaded files automatically after a short time (currently 48 hours).
                </P>

                <H3>2. The speech model download</H3>
                <P>
                    The first time you use Tono, it downloads a speech-recognition model from Hugging Face. Hugging Face can see ordinary
                    connection information, such as your IP address, as with any download. No recording or personal data is sent.
                </P>

                <H3>3. Apple&apos;s speech recognition</H3>
                <P>
                    Some live drills use iOS speech recognition. Where your iPhone supports it, this happens on the device. If it does not,
                    Apple may process the audio on its servers under Apple&apos;s privacy policy.
                </P>

                <H3>4. Apple services</H3>
                <P>
                    If you install Tono through TestFlight or the App Store, Apple handles the download, and may share crash reports or tester
                    feedback with me if you have allowed that in iOS. Tono&apos;s reminders are scheduled on your phone; they are not push
                    notifications from a server.
                </P>
            </>
        ),
    },
    {
        id: "what-i-dont-do",
        title: "What I do not do",
        body: (
            <UL>
                <li>I do not run a server that receives your recordings, scores or answers.</li>
                <li>I do not use analytics, advertising or tracking tools in the app.</li>
                <li>I do not sell or share your information, because I do not have it.</li>
                <li>I do not ask you to create an account.</li>
            </UL>
        ),
    },
    {
        id: "this-website",
        title: "This website",
        body: (
            <P>
                This page is part of my personal website, ahmadgraham.me, which is separate from the app. The site uses Vercel Web Analytics to
                count page views. It does not use cookies for that and does not build a profile of visitors. See{" "}
                <A href="https://vercel.com/docs/analytics/privacy-policy">Vercel&apos;s analytics privacy notes</A>. If you email me, I see your
                address and message, and use them only to reply.
            </P>
        ),
    },
    {
        id: "keeping-and-deleting",
        title: "Keeping it and deleting it",
        body: (
            <>
                <UL>
                    <li>
                        <B>On your phone:</B> recordings are cleared automatically after the number of days you choose in Settings (with two
                        &quot;keepsake&quot; takes kept each month), and you can delete any take yourself.
                    </li>
                    <li>
                        <B>Delete everything:</B> Settings → Your data → Reset app erases all recordings, scores, progress and settings. Deleting
                        the app removes all of it, including the speech model.
                    </li>
                    <li>
                        <B>Export:</B> Settings → Your data lets you save a copy of your practice data.
                    </li>
                    <li>
                        <B>At an AI provider:</B> anything sent for a review is under that provider&apos;s retention rules. Delete it through
                        your account with that provider, or remove your key from Tono to stop further reviews.
                    </li>
                </UL>
                <P>
                    Because I hold none of your data, there is nothing for me to access or erase on my side. For data held by a provider you
                    chose, contact that provider.
                </P>
            </>
        ),
    },
    {
        id: "security",
        title: "Security",
        body: (
            <>
                <P>
                    Your API key is stored in the iPhone Keychain, and reviews are sent over encrypted connections. Your data lives in the
                    app&apos;s private storage on your phone, protected by your device&apos;s passcode and iOS. No system is perfectly secure, so
                    keep your phone locked.
                </P>
                <P>
                    If your device is backed up through iCloud or to a computer, your practice data may be included in that backup, under
                    Apple&apos;s terms. The speech model is excluded from backups.
                </P>
            </>
        ),
    },
    {
        id: "children",
        title: "Children",
        body: <P>Tono is not meant for children under 13, and I do not knowingly collect information from them.</P>,
    },
    {
        id: "international",
        title: "International use",
        body: <P>AI providers you choose may process data in other countries. That is governed by their policies.</P>,
    },
    {
        id: "changes",
        title: "Changes to this policy",
        body: (
            <P>
                If I change this policy, I will update the date at the top. If a change affects what is sent off your phone, Tono will ask for
                your permission again.
            </P>
        ),
    },
    {
        id: "policies",
        title: "Services you may choose, and their policies",
        body: (
            <UL>
                {PROVIDER_POLICIES.map((provider) => (
                    <li key={provider.name}>
                        {provider.name}: <A href={provider.href}>{provider.href.replace("https://", "")}</A>
                    </li>
                ))}
            </UL>
        ),
    },
];

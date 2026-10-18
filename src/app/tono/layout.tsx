import { Instrument_Sans } from "next/font/google";

// Tono's typeface, the same one the app uses.
const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
    variable: "--font-tono",
    display: "swap",
});

export default function TonoLayout({ children }: { children: React.ReactNode }) {
    return <div className={instrumentSans.variable}>{children}</div>;
}

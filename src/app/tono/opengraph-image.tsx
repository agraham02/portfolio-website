import { ImageResponse } from "next/og";

export const alt = "Tono: get better at speaking, one rep at a time";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The link preview for /tono: the mark on Tono's warm black, with the tagline.
export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "0 96px",
                    background: "linear-gradient(180deg, #1C1B18 0%, #0B0B0A 100%)",
                    color: "#F4F2EC",
                }}
            >
                <svg width="260" height="100" viewBox="172 369 680 262">
                    <path
                        d="M214 581 C 270 581, 300 411, 390 411 C 500 411, 540 581, 654 581"
                        fill="none"
                        stroke="#F4F2EC"
                        strokeWidth="84"
                        strokeLinecap="round"
                    />
                    <circle cx="802" cy="581" r="50" fill="#FF453A" />
                </svg>
                <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -2, marginTop: 40, lineHeight: 1.05 }}>
                    Get better at speaking, one rep at a time.
                </div>
                <div style={{ display: "flex", fontSize: 34, marginTop: 28, color: "#A9A69D" }}>Tono · Coming soon to iPhone</div>
            </div>
        ),
        size
    );
}

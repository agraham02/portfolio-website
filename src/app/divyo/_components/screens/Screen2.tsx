"use client";

export default function Screen2() {
    return (
        <div className="relative h-full w-full bg-black">
            {/* Prefer lightweight looping demo; using a small mp4 from public/images */}
            <video
                className="h-full w-full object-cover"
                src="/images/React App - Google Chrome 2022-10-02 14-46-52.mp4"
                autoPlay
                muted
                playsInline
                loop
            />
        </div>
    );
}

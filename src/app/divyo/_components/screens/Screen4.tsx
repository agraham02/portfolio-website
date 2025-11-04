"use client";
import Image from "next/image";

export default function Screen4() {
    return (
        <div className="relative h-full w-full bg-white">
            <Image
                src="/images/Web_ClassSchedule.PNG"
                alt="App screen 4"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
    );
}

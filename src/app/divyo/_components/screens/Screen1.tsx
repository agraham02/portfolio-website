"use client";
import Image from "next/image";

export default function Screen1() {
    return (
        <div className="relative h-full w-full bg-white">
            <Image
                src="/images/Web_MainPageGUI.PNG"
                alt="App screen 1"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
    );
}

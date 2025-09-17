"use client";
import Image from "next/image";

export default function Screen3() {
    return (
        <div className="relative h-full w-full bg-white">
            <Image
                src="/images/Web_ArticleGUI.PNG"
                alt="App screen 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
    );
}

"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isConstructionPage = pathname === "/construction";

    return (
        <>
            {!isConstructionPage && <Navbar />}
            {children}
            {!isConstructionPage && <Footer />}
        </>
    );
}

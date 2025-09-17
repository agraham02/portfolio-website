"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import MobileNavigation from "@/components/MobileNavigation";
import Footer from "@/components/Footer";
import ScrollToTop from "./ScrollToTop";

export default function ConditionalLayout({
    children,
    version,
}: {
    children: React.ReactNode;
    version?: string;
}) {
    const pathname = usePathname();
    const isConstructionPage = pathname === "/construction";

    return (
        <>
            {!isConstructionPage && <Navbar />}
            {!isConstructionPage && <MobileNavigation />}
            {children}
            {!isConstructionPage && <Footer version={version} />}
            {!isConstructionPage && <ScrollToTop />}
        </>
    );
}

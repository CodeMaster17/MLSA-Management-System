import React from "react";
import Sidebar from "@/components/shared/Sidebar/Sidebar";
import MarginWidthWrapper from "@/components/shared/MarginWidthWrapper/MarginWidthWrapper";
import PageWrapper from "@/components/shared/PageWrapper/PageWrapper";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex overflow-x-hidden bg-[#E2E8F0]">
            <Sidebar />
            <main className="flex-1">
                <MarginWidthWrapper>
                    {/* <Navbar /> */}
                    <PageWrapper>{children}</PageWrapper>
                </MarginWidthWrapper>
            </main>
        </div>
    );
}

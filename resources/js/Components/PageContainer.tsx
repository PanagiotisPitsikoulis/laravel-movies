import Navbar from "@/Components/Navbar";
import { User } from "@/types";
import React from "react";

export default function PageContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/*Navbar*/}
            <Navbar />
            <section
                className={
                    "min-h-screen space-y-20 lg:px-14 pb-14 px-6 py-5 pt-20"
                }
            >
                {children}
            </section>
            {/*Footer*/}
            <footer className={"text-center text-sm py-10"}>
                Developed with 💚 by{" "}
                <span className={"underline"}>Filoreti Nastasi</span>
            </footer>
        </>
    );
}

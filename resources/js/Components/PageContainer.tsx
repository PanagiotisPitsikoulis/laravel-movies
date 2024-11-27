import Navbar from "@/Components/Navbar";

export default function PageContainer({children}: { children: React.ReactNode }) {
    return <>
        {/*Navbar*/}
        <Navbar/>
        <section className={"bg-gray-50 space-y-20 lg:px-14 pb-14 px-6"}>
            {children}
        </section>
    </>
}

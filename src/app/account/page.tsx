import Company from "@/components/account/company";
import HeadAccount from "@/components/account/head";
import Other from "@/components/account/other";
import Personal from "@/components/account/personal";
import Footer from "@/components/menu/footer";
import { Button } from "@/components/ui/button";

export default function Home() {

    return (
        <main className="w-screen">
            <HeadAccount />
            <Personal />
            <Company />
            <Other />

            <div className="flex justify-center mt-5">
                <Button variant="outline" className="color-primary outline-primary text-xs font-medium w-10/12">Logout</Button>
            </div>
            <div className="version w-screen flex justify-center mt-2">
                <span className="text-[10px] text-center font-extralight from-neutral-500">Version 1.5.1 (11)</span>
            </div>
            <div className="mb-20"></div>
            <Footer />
        </main>
    )
}
"use client"
import Company from "@/components/account/company";
import HeadAccount from "@/components/account/head";
import Other from "@/components/account/other";
import Personal from "@/components/account/personal";
import Footer from "@/components/menu/footer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter()

    const logout = () => {
        router.push('/login')
    }
    return (
        <main className="w-screen">
            <HeadAccount />
            <Personal />
            <Company />
            <Other />

            <div className="flex justify-center mt-5">
                <Button variant="outline" onClick={logout} className="color-primary outline-primary text-xs font-medium w-10/12">Logout</Button>
            </div>
            <div className="version w-screen flex justify-center mt-2">
                <span className="text-[10px] text-center font-extralight from-neutral-500">Version 1.5.1 (11)</span>
            </div>
            <div className="mb-20"></div>
            <Footer />
        </main>
    )
}
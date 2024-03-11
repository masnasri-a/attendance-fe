
import wave from "@/../public/layered-waves-haikei.svg"
import Form from "@/components/login/form"
import Image from "next/image"
import { FaRobot } from "react-icons/fa"
export default function Home() {

    return (
        <main>
            <div className="bg absolute top-0">
                <Image src={wave} alt="wave" width={700} objectFit="cover" />
            </div>
            <div className="flex justify-center">
                <div className="logo absolute top-40  bg-white rounded-full p-5">
                    <FaRobot color={
                        "#C21277"
                    } size={30} />
                </div>
            </div>
            <Form />
        </main>
    )
}
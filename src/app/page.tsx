import Announ from "@/components/home/announ";
import Clockin from "@/components/home/clockin";
import Menu from "@/components/home/menu";
import Footer from "@/components/menu/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Greeting from "@/lib/greeting";
import { MdMyLocation } from "react-icons/md";

export default function Home() {

  return (
    <main className="h-dvh">
      <div className="wave h-96 z-10  w-dvw  bg-fixed"></div>
      <div className="z-0 top-0 mt-10 absolute">
        <div className="intro ms-4 mb-10">
          <div className="greet flex flex-col text-white">
            <span className="font-light text-sm"><Greeting />,</span>
            <span className="font-semibold">Nasri Adzlani</span>
          </div>
        </div>
        <Clockin />
        <Menu />
        <Announ />
      </div>
      <Footer />
    </main>
  );
}

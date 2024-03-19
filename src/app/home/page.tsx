"use client"
import Announ from "@/components/home/announ";
import Clockin from "@/components/home/clockin";
import Menu from "@/components/home/menu";
import Footer from "@/components/menu/footer";
import Greeting from "@/lib/greeting";
import { useEffect, useState } from "react";


export default function Home() {
  const [username, setUsername] = useState('');
  useEffect(() => {
    let usernames = localStorage.getItem('username');
    if (usernames === null) {
      window.location.href = '/login';
    } else {
      setUsername(usernames);
    }
  }, [])


  return (
    <main className="h-dvh">
      <div className="wave h-96 z-10  w-dvw  bg-fixed"></div>
      <div className="z-0 top-0 mt-10 absolute">
        <div className="intro ms-4 mb-10">
          <div className="greet flex flex-col text-white">
            <span className="font-light text-sm"><Greeting />,</span>
            <span className="font-semibold">{username}</span>
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

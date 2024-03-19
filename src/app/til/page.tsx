"use client"

import Header from "@/components/menu/header"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@radix-ui/react-separator"
import { FaCalendarCheck, FaCalendarDay, FaCalendarTimes, FaChartPie, FaEllipsisV, FaRegCalendarTimes } from "react-icons/fa"

export default function Page() {
    const data = [
        {
            icon: <FaChartPie />,
            title: "Available Day TIL",
            content: "3",
            color: "bg-[#52b2cf]"
        },
        {
            icon: <FaCalendarDay />,
            title: "Waiting Approval",
            content: "2",
            color: "bg-[#7ec4cf]"
        },
        {
            icon: <FaCalendarTimes />,
            title: "Rejected Approval",
            content: "5",
            color: "bg-[#9cadce]"
        },
        {
            icon: <FaCalendarCheck />,
            title: "Approved Approval",
            content: "5",
            color: "bg-[#52b2cf]"
        }
    ]

    const history = [
        {
            status: "Waiting",
            date: "01 January 2024",
            start_at: "08:00",
            end_at: "17:00"
        },
        {
            status: "Waiting",
            date: "02 January 2024",
            start_at: "08:00",
            end_at: "17:00"
        },
        {
            status: "Rejected",
            date: "02 January 2024",
            start_at: "08:00",
            end_at: "17:00"
        },
        {
            status: "Approved",
            date: "02 January 2024",
            start_at: "08:00",
            end_at: "17:00"
        },
        {
            status: "Rejected",
            date: "02 January 2024",
            start_at: "08:00",
            end_at: "17:00"
        }
    ]

    return (
        <main>
            <Header title="Time In Lieu" />
            <div className="main bg-white absolute h-full top-0 mt-28 w-screen p-5 rounded-tr-3xl rounded-tl-3xl">
                <div className="slider flex gap-2 overflow-y-hidden rounded-md">
                    {
                        data.map((item, index) => {
                            return (
                                <Card key={index} className={`${item.color} text-white w-[600px]`}>
                                    <CardHeader className="">
                                        <CardTitle className="flex justify-between w-full">
                                            <div className="content text-5xl">{item.content}</div>
                                            <div className="p-2 bg-gray-300 bg-opacity-50 rounded h-max">{item.icon}</div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="w-[200px] font-normal text-sm">{item.title}</CardContent>
                                </Card>
                            )
                        })
                    }
                </div>
                <Separator className="my-4" />
                <div className="history">
                    <Label className="text-lg font-semibold">History</Label>
                    <Separator className="my-4" />

                    {
                        history.map((item, index) => {
                            return (
                                <div className="mb-2 flex justify-between items-center pr-3 rounded-lg pt-3 pb-3 w-full bg-gray-100" key={index}>
                                    <div className="menu flex justify-start items-center gap-5 ">
                                        <div className={`w-1 rounded-r-full h-8 ${item.status == "Rejected" ? "bg-red-500" : ""} ${item.status == "Approved" ? "bg-green-400" : ""} ${item.status == "Waiting" ? "bg-yellow-500" : ""}`} key={index}>
                                        </div>
                                        <div className="content">
                                            <div className="titles text-base font-semibold">{item.status} TIL</div>
                                            <div className="times text-[10px]">
                                                {item.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="more cursor-pointer">
                                        <FaEllipsisV />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}
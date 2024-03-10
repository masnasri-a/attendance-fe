import React from 'react'
import { LuBookMarked, LuCalendarX, LuClipboardEdit, LuDollarSign, LuHammer, LuMoonStar, LuRockingChair, LuTimerReset } from 'react-icons/lu'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'

const Menu = () => {

    const listMenu = [
        {
            title: "TIL",
            icon: <LuMoonStar color='white' size={25} />,
            slug: "til"
        }, {
            title: "KHL",
            icon: <LuTimerReset color='white' size={25} />,
            slug: "khl"
        }, {
            title: "Time Off",
            icon: <LuCalendarX color='white' size={25} />,
            slug: "timeoff"
        }, {
            title: "Approval List",
            icon: <LuBookMarked color='white' size={25} />,
            slug: "approval"
        }, {
            title: "Logs",
            icon: <LuClipboardEdit color='white' size={25} />,
            slug: "logs"
        }, {
            title: "Reimburse",
            icon: <LuDollarSign color='white' size={25} />,
            slug: "reimburse"
        }, {
            title: "Booking Room",
            icon: <LuRockingChair color='white' size={25} />,
            slug: "booking"
        }, {
            title: "Feedback",
            icon: <LuHammer color='white' size={25} />,
            slug: "feedback"
        }
    ]

    return (
        <div className='mt-4'>
            <div className='flex flex-wrap justify-around items-start w-screen gap-0 pt-8 pr-5 pl-5 text-center bg-white rounded-3xl'>
                {
                    listMenu.map((val: any, index: number) => {
                        return <Link href={val.slug} className="w-1/4  cursor-pointer" key={index} >
                            <div className=" bg-pink-500 flex flex-col justify-center  items-center p-4 rounded-2xl ml-3 mr-3">
                                {val.icon}
                            </div>
                            <p className='font-normal text-xs leading-4 p-2 mb-5'>{val.title}</p>
                        </Link>
                    })
                }
            </div>
        </div >
    )
}

export default Menu
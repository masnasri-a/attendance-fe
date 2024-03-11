import React from 'react'
import { Card, CardContent } from '../ui/card'
import { FaBlackTie, FaBookmark, FaCalendarAlt, FaEnvelope, FaFingerprint, FaLevelUpAlt, FaMapPin, FaPhoneAlt, FaScroll } from 'react-icons/fa'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip'

const Company = () => {

    const persnonalInfolIst = [
        {
            icon: <FaBookmark />,
            value: "69-696969",
            tile: "Emplyee Id"
        }, {
            icon: <FaMapPin />,
            value: "Jakarta",
            tile: "Location"
        }, {
            icon: <FaScroll />,
            value: "Backend Developers",
            tile: "Role"
        }, {
            icon: <FaLevelUpAlt />,
            value: "Medium",
            tile: "Level"
        }, {
            icon: <FaBlackTie />,
            value: "Contract",
            tile: "Status"
        }, {
            icon: <FaCalendarAlt />,
            value: "16 October 2023",
            tile: "Join Date"
        }
    ]
    return (
        <Card className='m-3 rounded-2xl'>
            <CardContent>
                <TooltipProvider>
                    <Tooltip>
                        <div className='flex flex-col justify-center items-center mt-3 text-sm font-semibold'>
                            <span>Company Details</span>
                            <div className="flex flex-col  w-screen mt-5 gap-2">
                                {
                                    persnonalInfolIst.map((val: any, index: number) => {
                                        return <div className="flex items-center gap-2 ml-10 mr-10" key={index}>


                                            <TooltipTrigger>{val.icon}</TooltipTrigger>
                                            <TooltipContent>
                                                <p>{val.title}</p>
                                            </TooltipContent>
                                            <span className="text-sm ml-4 font-light">:</span>
                                            <span className='text-sm font-light'>{val.value}</span>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                    </Tooltip>
                </TooltipProvider>
            </CardContent>
        </Card >
    )
}

export default Company
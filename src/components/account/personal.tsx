import React from 'react'
import { Card, CardContent } from '../ui/card'
import { FaEnvelope, FaFingerprint, FaPhoneAlt } from 'react-icons/fa'

const Personal = () => {

    const persnonalInfolIst = [
        {
            icon: <FaPhoneAlt />,
            value: "+62 82228893284"
        }, {
            icon: <FaEnvelope />,
            value: "nasri.adzlani@aliedev.com"
        }, {
            icon: <FaFingerprint />,
            value: "26 September 1998"
        }
    ]
    return (
        <Card className='m-3 rounded-2xl'>
            <CardContent>
                <div className='flex flex-col justify-center items-center mt-3 text-sm font-semibold'>
                    <span>Personal Information</span>
                    <div className="flex flex-col w-screen  mt-5 gap-2">
                        {
                            persnonalInfolIst.map((val: any, index: number) => {
                                return <div className="flex items-center gap-2 ml-10 mr-10" key={index}>
                                    {val.icon}
                                    <span className="text-sm ml-4 font-light">:</span>
                                    <span className='text-sm font-light'>{val.value}</span>
                                </div>
                            })
                        }
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}

export default Personal
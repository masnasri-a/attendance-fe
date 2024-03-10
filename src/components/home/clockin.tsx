import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { MdMyLocation } from 'react-icons/md'

const Clockin = () => {
    return (
        <div className="flex flex-row gap-2 justify-around items-center w-screen">
            <Card className="w-5/12 h-32">
                <CardContent className="flex flex-col items-center justify-around h-max gap-3 mt-3">
                    <span className="font-bold">18:01</span>
                    <span className="text-[#B9B6B8] text-xs flex gap-1 items-center">See Location <MdMyLocation /></span>
                    <Button variant="outline" className="color-primary outline-primary text-xs font-medium w-full">Clock In</Button>
                </CardContent>
            </Card>
            <Card className="w-5/12 h-32">
                <CardContent className="flex flex-col items-center justify-around h-max gap-3 mt-3">
                    <span className="font-bold">-</span>
                    <span className="text-[#B9B6B8] text-xs flex gap-1 items-center">See Location <MdMyLocation /></span>
                    <Button variant="default" className="color-primary outline-primary text-xs font-medium w-full">Clock Out</Button>
                </CardContent>
            </Card>
        </div>
    )
}
export default Clockin
"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { MdMyLocation } from 'react-icons/md'
import { useToast } from '../ui/use-toast'

const Clockin = () => {

    const [clockInData, setClockInData] = useState({
        clock_in: '-',
        latitude: "-",
        longitude: '-',
        location: '-'
    });
    const [clockOutData, setClockOutData] = useState({
        clock_out: '-',
        latitude: "-",
        longitude: '-',
        location: '-'
    });
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });

    const { toast } = useToast();
    useEffect(() => {
        if ('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                console.log("lat " + latitude);
                console.log("long " + longitude);
                setLocation({ latitude, longitude });
            })
        }
        if (localStorage.getItem('clock_in_data') === null) {
            getClock()
        }
    }, [])

    const getClock = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/attendance/getClock`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
        if (response.status === 200) {
            const res = await response.json()
            console.log(res);
            setClockInData(res.latest_clock_in)
            setClockOutData(res.latest_clock_out)
        }
    }

    const clock = async (clockType: string) => {
        if (location.latitude == 0) {
            alert("Please Enable Access Location")
        } else {
            console.log(location);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/attendance/clock`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    type: clockType,
                    latitude: location.latitude.toString(),
                    longitude: location.longitude.toString()
                })
            })
            if (response.status === 200) {
                console.log(await response.json());
                getClock();
                toast({
                    title: `${clockType == "ClockIn" ? "Clock In Successfully" : "Clock Out Successfully"}`,
                    description: new Date().toTimeString(),
                })
                setTimeout(() => {
                    window.location.href = '/';
                }, 3000)
            } else {
                toast({
                    title: `${clockType == "ClockIn" ? "Clock In Successfully" : "Clock Out Successfully"}`,
                    description: new Date().toTimeString(),
                    variant: "destructive"
                })

                setTimeout(() => {
                    window.location.href = '/';
                }, 3000)
            }
        }

    }

    return (
        <div className="flex flex-row gap-2 justify-around items-center w-screen">
            <Card className="w-5/12 h-32">
                <CardContent className="flex flex-col items-center justify-around h-max gap-3 mt-3">
                    <span className="font-bold">{clockInData.clock_in != "-" ? clockInData.clock_in.split("T")[1] : "-"}</span>
                    <span className="text-[#B9B6B8] text-xs flex gap-1 items-center">See Location <MdMyLocation /></span>
                    <Button variant="outline" onClick={() => clock("ClockIn")} className="color-primary outline-primary text-xs font-medium w-full">Clock In</Button>
                </CardContent>
            </Card>
            <Card className="w-5/12 h-32">
                <CardContent className="flex flex-col items-center justify-around h-max gap-3 mt-3">
                    <span className="font-bold">{clockOutData.clock_out != "-" ? clockOutData.clock_out.split("T")[1] : "-"}</span>
                    <span className="text-[#B9B6B8] text-xs flex gap-1 items-center">See Location <MdMyLocation /></span>
                    <Button variant="default" className="color-primary outline-primary text-xs font-medium w-full">Clock Out</Button>
                </CardContent>
            </Card>
        </div>
    )
}
export default Clockin

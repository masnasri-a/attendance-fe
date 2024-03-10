import Image from 'next/image'
import React from 'react'
import GongXi from "@/../public/gongxi.jpg"
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'

const Announ = () => {
    const listAnnoun = [
        {
            title: "Gong Xi Fa Cai",
            image: <Image src={GongXi} alt='"test' width={200} height={70} objectFit='cover' />
        }, {
            title: "Gong Xi Fa Cai",
            image: <Image src={GongXi} alt='"test' width={200} height={100} />
        }, {
            title: "Gong Xi Fa Cai",
            image: <Image src={GongXi} alt='"test' width={200} height={100} />
        }, {
            title: "Gong Xi Fa Cai",
            image: <Image src={GongXi} alt='"test' width={200} height={100} />
        }
    ]
    return (
        <div className="w-screen">
            <div className="info flex justify-between m-3 pb-2">
                <span className='text-sm font-semibold'>Announcement</span>
                <Link href={"/announcement"} className=' flex items-center text-sm text-pink-700'>See All <IoIosArrowForward /></Link>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className=" h-[200px]"
            >
                <CarouselContent className='ml-4'>
                    {
                        listAnnoun.map((val: any, index: number) => {
                            return <CarouselItem key={index} className="flex justify-center items-center">
                                <div className="flex flex-col items-center justify-center h-max">
                                    {val.image}
                                    <span className="text-sm font-normal">{val.title}</span>
                                </div>
                            </CarouselItem>
                        })
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Announ
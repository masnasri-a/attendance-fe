import Image from 'next/image'
import React from 'react'
import Person from "@/../public/person.png"

const HeadAccount = () => (
    <div className='flex flex-col justify-center text-white items-center pt-10 pb-5 rounded-bl-3xl rounded-br-3xl gap-2 bg-[#C21277]'>
        <span className='font-semibold'>Account Settings</span>
        <div className="bg-white w-20 p-1 rounded-full">
            <Image src={Person} alt='profile' />
        </div>
        <span className='text-sm'>Nasri Adzlani</span>
    </div>
)

export default HeadAccount
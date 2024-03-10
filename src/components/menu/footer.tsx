import Link from 'next/link'
import React from 'react'
import home from "@/../public/home-page.png"
import user from "@/../public/user.png"
import Image from 'next/image'

const Footer = () => {

    const menu = [
        {
            title: 'Home',
            icon: home,
            redirect: '/'
        }, {
            title: 'Account',
            icon: user,
            redirect: '/account'
        }
    ]

    return (
        <div className='fixed bottom-0 flex w-screen pt-2 justify-around items-center bg-white'>
            {
                menu.map((val: any, index: number) => {
                    return <div key={index} className=''>
                        <Link href={val.redirect} >
                            <div className="flex items-center flex-col">
                                <Image src={val.icon} alt='asd' width={25} />
                                <span className='mt-1'>{val.title}</span>
                            </div>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}

export default Footer
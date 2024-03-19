"use client"
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Link from 'next/link'
import { Button } from '../ui/button'
import axios from 'axios';

const Form = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        if (data.status === 200) {
            const res = await data.json()
            localStorage.setItem('token', res.access_token)
            localStorage.setItem('username', res.name)
            localStorage.setItem('email', res.email)
            window.location.href = '/'

        }

    }

    return (
        <div className='absolute flex flex-col items-center justify-center w-screen bottom-0 bg-white p-10 rounded-3xl'>
            <div className="lebel w-full mb-3">
                <p className='text-lg font-bold'>Sign In</p>
                <span className='font-light text-sm text-[10px]'>Use your work email and the password correctly!.</span>
            </div>
            <div className="form w-full mb-5">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="form w-full">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Password</Label>
                    <Input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="flex mt-2 mb-5 w-full justify-end">
                <Link href={'/forget'} className='font-normal text-[10px] '>
                    Forget Password?
                </Link>
            </div>
            <Button variant="default" onClick={login} className=" w-full color-primary outline-primary text-xs font-medium">Sign In</Button>
        </div>
    )
}

export default Form
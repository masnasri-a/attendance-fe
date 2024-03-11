import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

const Other = () => {
    return (
        <div className=" ml-5 mr-5 text-sm font-semibold text-center">
            <span>Other</span>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Change Password</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid  items-center gap-1.5 text-left mr-4 ml-4 mb-5">
                            <Label htmlFor="text" className='font-light text-sm'>Current Password</Label>
                            <Input type="password" id="password" className='mr-2' placeholder="Enter your Current Password" />
                        </div>

                        <div className="grid  items-center gap-1.5 text-left mr-4 ml-4 mb-5">
                            <Label htmlFor="text" className='font-light text-sm'>New Password</Label>
                            <Input type="password" id="password" className='mr-2' placeholder="Enter your New Password" />
                        </div>

                        <div className="grid  items-center gap-1.5 text-left mr-4 ml-4 mb-5">
                            <Label htmlFor="text" className='font-light text-sm'>Re-enter Password</Label>
                            <Input type="password" id="password" className='mr-2' placeholder="Re-Enter your New Password" />
                        </div>
                        <Button variant="default" className="color-primary outline-primary text-xs font-medium mr-4 ml-4 w-3/4">Save Change</Button>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default Other
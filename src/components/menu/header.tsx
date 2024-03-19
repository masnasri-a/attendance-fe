import { Separator } from '@radix-ui/react-separator'
import React from 'react'
import { FaAngleLeft, FaRegPaperPlane } from 'react-icons/fa'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet'
import { Calendar } from '../ui/calendar'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'

const Header = (props: any) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const numbers = [];
    for (let i = 0; i <= 23; i++) {
        numbers.push(`${i < 10 ? "0" + i : i}`);
    }
    return (
        <div className="bg-pink-700 pt-3 ">
            <div className="flex justify-between pl-3 pb-3 pr-3">
                <div className="backHead flex gap-3 items-center text-white">
                    <div className="back cursor-pointer">
                        <FaAngleLeft />
                    </div>
                    <div className="titles font-extrabold">
                        {props.title}
                    </div>
                </div>
                <div className="create p-2 m-2 cursor-pointer flex justify-center items-center h-7 w-7 bg-pink-500 rounded-full">
                    <Sheet>
                        <SheetTrigger><IoMdAddCircleOutline color='white' /></SheetTrigger>
                        <SheetContent side={"bottom"}>
                            <SheetHeader>
                                <SheetTitle>Create new TIL request</SheetTitle>
                            </SheetHeader>
                            <div className="calender flex justify-center">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border w-max"
                                />
                            </div>
                            <div className="times flex">
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a Start" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="00">00:00</SelectItem>
                                        <SelectItem value="00">01:00</SelectItem>
                                        <SelectItem value="00">02:00</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>

            <Separator className="h-[1px] bg-white" />
            <div className="h-36"></div>

        </div>
    )
}

export default Header
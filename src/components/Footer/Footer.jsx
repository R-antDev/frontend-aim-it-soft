import {SiJirasoftware} from "react-icons/si";
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import {FaSquareInstagram, FaXTwitter} from "react-icons/fa6";
import { Description, Field, Label, Textarea } from '@headlessui/react'
import { Button } from '@headlessui/react'
import clsx from 'clsx'
import { IoIosSend } from "react-icons/io";


export function Footer() {
    return (
        <div className={'bg-primaryColor text-white'}>
            <div className="container py-10 grid grid-cols-1 md:grid-cols-2">
                <div className={'space-y-6'}>
                    <div className={'space-y-4'}>
                        <SiJirasoftware className="text-6xl"/>
                        <h1 className="text-xl font-bold">aimIT Soft.</h1>
                        <p className="text-sm text-wrap w-1/2">
                            aimIT Soft. is a software development company in Bangladesh that started its journey
                            back in 2009; with the aim to deliver passionate and tailored services.
                        </p>
                    </div>
                    <div className={'text-white text-2xl flex items-center space-x-4'}>
                        <FaFacebook/>
                        <FaXTwitter/>
                        <FaLinkedin/>
                        <FaSquareInstagram/>
                    </div>
                    <div className={'space-y-2 text-sm flex flex-col font-bold'}>
                        <a href="mailto:imemon.sh@gmail.com">imemon.sh@gmail.com</a>
                        <a href="tel:+880 123456789">+880 123456789</a>
                    </div>
                    <div className={'text-sm text-secondaryColor'}>
                        <a href={'https://github.com/R-antDev'}>@R-antDev</a>
                    </div>
                </div>
                <div className={'space-y-6'}>
                    <div>
                        <h1 className={'text-2xl font-bold underline underline-offset-4'}>Explore</h1>
                        <ul className={'py-4'}>
                            <li>
                                <a href="">
                                    Career
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Privacy & policy
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Who we are
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full max-w-md">
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">Email us.</Label>
                            <Description className="text-sm/6 text-white/50">Tell us about your project.</Description>
                            <Textarea
                                className={clsx(
                                    'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                )}
                                rows={3}
                            />
                            <Button className=" mt-4 inline-flex items-center gap-2 rounded-md bg-sky-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-sky-600 data-[open]:bg-sky-700 data-[focus]:outline-1 data-[focus]:outline-white">
                                <IoIosSend /> Send
                            </Button>
                        </Field>
                    </div>
                </div>
            </div>
        </div>
    )
}
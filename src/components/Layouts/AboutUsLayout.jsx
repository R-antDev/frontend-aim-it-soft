import {SectionLabel} from "../SectionLabel.jsx";
import {Button} from "@headlessui/react";
import {HiMiniVideoCamera} from "react-icons/hi2";

export default function AboutUsLayout() {
    return (
        <div>
            <div className={'container py-6'}>
                <SectionLabel
                    description={'Empowering digital innovation with cutting-edge software solutions tailored to drive your business success.'}
                    title={'About Us'}
                    descriptionColor={'sky-900'}
                />
                <div className={'grid grid-cols-1 space-y-10 md:space-y-0 md:grid-cols-3'}>
                    <div className={'p-10 rounded-xl bg-primaryColor text-white space-y-4 h-fit'}>
                        <h1 className={'text-balance font-bold text-4xl'}>We carry over decades worth of
                            experience.</h1>
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-sky-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-sky-600 data-[open]:bg-sky-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            <HiMiniVideoCamera/>
                            Watch Video
                        </Button>
                    </div>
                    <div className={'col-span-2'}>
                        <div className={'md:px-10 px-4 md:mx-10 space-y-10'}>
                            <div className={'space-y-4'}>
                                <h1 className={'text-3xl text-primaryColor font-bold'}>
                                    A results-driven company creating robust, unique and tailored software solutions
                                </h1>
                                <p className={'text-lg text-primaryColor text-wrap'}>
                                    aimIT Soft. is a software development company in Bangladesh that started its journey
                                    back in 2009; with the aim to deliver personal, passionate and tailored services.
                                    Over a decade’s operation, we have marked a place of reliability and trustworthiness
                                    both nationally and internationally among our clients of different industries.
                                </p>
                                <p className={'text-lg text-primaryColor text-wrap'}>
                                    Since our inception, we have been helping organizations with complete technological
                                    solutions consisting of services like software development, web design and
                                    development, technical support, graphic design and many others.
                                </p>
                            </div>
                            <div className={'space-y-6'}>
                                <div className={'space-y-2'}>
                                    <h1 className={'text-6xl text-secondaryColor font-bold'}>
                                        1,000+
                                    </h1>
                                    <p className={'text-lg text-primaryColor text-balance'}>
                                        Successful projects
                                    </p>
                                </div>
                                <div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
                                    <div className={'space-y-2'}>
                                        <h1 className={'text-6xl text-secondaryColor font-bold'}>
                                            5,40+
                                        </h1>
                                        <p className={'text-lg text-primaryColor text-balance'}>
                                            Clients worldwide
                                        </p>
                                    </div>
                                    <div className={'space-y-2'}>
                                        <h1 className={'text-6xl text-secondaryColor font-bold'}>
                                            10+
                                        </h1>
                                        <p className={'text-lg text-primaryColor text-balance'}>
                                            Years of experience
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
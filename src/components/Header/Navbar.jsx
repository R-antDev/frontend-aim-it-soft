import { SiJirasoftware } from "react-icons/si";
import { Disclosure } from '@headlessui/react';
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from '@headlessui/react';

function Navbar() {
    return (
        <Disclosure as="nav" className="fixed top-0 left-0 w-full shadow-lg bg-secondaryColor text-white z-20">
            {({ open }) => (
                <>
                    <div className="container h-20 flex items-center justify-between">
                        <div className="flex items-center gap-16">
                            <div className="flex items-center gap-4">
                                <SiJirasoftware className="text-3xl" />
                                <h1 className="text-xl font-bold">aimIT Soft.</h1>
                            </div>
                            <div className="hidden md:flex text-md items-center gap-8">
                                <a className="underline underline-offset-4" href="/">Home</a>
                                <a href="/">Services</a>
                                <a href="#">Projects</a>
                                <a href="#">About</a>
                                <a href="#">Contact</a>
                            </div>
                        </div>
                        <div className="flex items-center md:hidden">
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <FiX className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <FiMenu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <Button className="rounded bg-primaryColor py-2 px-4 text-sm text-white hover:bg-green-500 active:bg-green-600">
                                Contact us
                            </Button>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a className="block px-3 py-2 rounded-md hover:bg-primaryColor text-base font-medium" href="/">Home</a>
                            <a className="block px-3 py-2 rounded-md hover:bg-primaryColor text-base font-medium " href="/">Services</a>
                            <a className="block px-3 py-2 rounded-md hover:bg-primaryColor text-base font-medium" href="#">Projects</a>
                            <a className="block px-3 py-2 rounded-md hover:bg-primaryColor text-base font-medium" href="#">About</a>
                            <a className="block px-3 py-2 rounded-md hover:bg-primaryColor text-base font-medium" href="#">Contact</a>
                            <Button className="block w-full rounded bg-primaryColor py-2 text-center text-white hover:bg-tertiaryColor active:bg-tertiaryColor">
                                Contact us
                            </Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;

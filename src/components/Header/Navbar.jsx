import { SiJirasoftware } from "react-icons/si";
import { Button } from '@headlessui/react';

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full shadow-lg bg-primaryColor text-white z-20">
            <div className="container h-20 flex items-center justify-between">
                <div className="flex items-center gap-16">
                    <div className="flex items-center gap-4">
                        <SiJirasoftware className="text-3xl" />
                        <h1 className="text-xl font-bold">aimIT Soft.</h1>
                    </div>
                    <div className="text-md flex items-center gap-8">
                        <a className="underline underline-offset-4" href="/">Home</a>
                        <a href="/">Services</a>
                        <a href="#">Projects</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button
                        className="rounded bg-secondaryColor py-2 px-4 text-sm text-white hover:bg-secondaryColor active:bg-tertiaryColor">
                        Contact us
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

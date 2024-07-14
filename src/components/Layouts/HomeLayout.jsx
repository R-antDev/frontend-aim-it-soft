import FullScreenBackground from "../Partials/FullScreenBackground.jsx";
import {Button} from "@headlessui/react";

export function HomeLayout() {
    return (
        <FullScreenBackground>
            <div className="flex flex-col text-white h-full space-y-10 ">
                <div className={'space-y-6'}>
                    <p className="text-lg underline underline-offset-4">One-Stop Solution For All Your Business Needs</p>
                    <h1 className={'text-6xl font-bold'}>Creating <span className={'text-yellow-400'}>Software</span>
                    </h1>
                    <h1 className={'text-5xl'}>Digital Excellence</h1>
                </div>
                <Button
                    className="rounded-full w-fit bg-sky-600 py-2 px-6 text-xl text-white hover:bg-sky-500 active:bg-sky-700">
                    Explore Our Work
                </Button>
            </div>
        </FullScreenBackground>
    )
}

import {SectionLabel} from "../SectionLabel.jsx";
import FormReview from "../Partials/FormReview.jsx";
import {Button} from '@headlessui/react'


export default function ClientReview() {
    return (
        <div className={'container py-10'}>
            <SectionLabel
                description={' What our clients say about us.'}
                title={'Client Review'}
            />

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-10'}>
                <div>
                    <FormReview/>
                </div>
                <div className={'flex flex-col space-y-10 justify-center'}>
                    <h1 className={'text-balance font-bold text-2xl uppercase'}>
                        Their dedication to excellence was impressive.
                    </h1>
                    <p className={'text-balance text-md'}>
                        aimIT soft. is strong in providing high quality software solutions. We worked with aimIT soft.
                        on a data archiving & case management
                        project, during which, the most impressive part about them was that they did
                        not see themselves just as a service provider.
                    </p>
                    <div className={'space-y-0.5'}>
                        <p className={'font-bold'}>
                            Mr. Someone
                        </p>
                        <p className={'text-md'}>
                            IT Manager, Company USA
                        </p>
                    </div>
                    <div className={'space-x-4'}>
                        <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            Next Review
                        </Button>
                        <Button className="inline-flex items-center gap-2 rounded-md bg-blue-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-blue-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            Previous Review
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
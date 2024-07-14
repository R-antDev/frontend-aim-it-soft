import {Description, Field, Fieldset, Input, Label, Legend, Textarea} from '@headlessui/react'
import clsx from 'clsx'
import {Button} from '@headlessui/react';

export default function FormReview() {
    return (

        <div className="w-full bg-primaryColor rounded-xl  max-w-lg">
            <Fieldset className="space-y-4 rounded-xl bg-white/5 p-6 sm:p-10">
                <Legend className="text-base/7 font-semibold text-white">Add a review</Legend>
                <Field>
                    <Label className="text-sm/6 font-medium text-white">Your name</Label>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                    />
                </Field>
                <Field>
                    <Label className="text-sm/6 font-medium text-white">Your profession</Label>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                    />
                </Field>
                <Field>
                    <Label className="text-sm/6 font-medium text-white">Review title</Label>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                    />
                </Field>
                <Field>
                    <Label className="text-sm/6 font-medium text-white">Review description</Label>
                    <Description className="text-sm/6 text-white/50">
                        What did you like or dislike about us?
                    </Description>
                    <Textarea
                        className={clsx(
                            'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        rows={3}
                    />
                </Field>
                <Button
                    className="inline-flex items-center gap-2 rounded-md bg-green-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-green-500 data-[open]:bg-green-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Save changes
                </Button>
            </Fieldset>
        </div>
    )

}
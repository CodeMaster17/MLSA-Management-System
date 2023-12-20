'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { z } from 'zod'
import { FormDataSchema, MemberSchemaFormData } from '@/lib/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, ChevronsUpDown } from 'lucide-react'
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useForm, SubmitHandler, Form } from 'react-hook-form'
import { Input } from "@/components/ui/input"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils'
import { BRANCH_DROPDOWN, POSITION_DROPDWON, YEAR_DROPDOWN } from '@/constants'
import { Label } from '@/components/ui/label'


const steps = [
    {
        id: 'Step 1',
        name: 'Personal Information',
        fields: ['firstName', 'lastName', 'email']
    },
    {
        id: 'Step 2',
        name: 'Address',
        fields: ['country', 'state', 'city', 'street', 'zip']
    },
    { id: 'Step 3', name: 'Complete' }
]
const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

type Inputs = z.infer<typeof MemberSchemaFormData>


const AddMemberForm = () => {



    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const [previousStep, setPreviousStep] = useState(0)
    const [currentStep, setCurrentStep] = useState(0)
    const delta = currentStep - previousStep

    const {
        register,
        handleSubmit,
        watch,
        reset,
        trigger,
        formState: { errors }
    } = useForm<Inputs>({
        resolver: zodResolver(MemberSchemaFormData)
    })

    const processForm: SubmitHandler<Inputs> = data => {
        console.log(data)
        // reset()
    }

    type FieldName = keyof Inputs

    const next = async () => {
        const fields = steps[currentStep].fields
        console.log("filedls", fields)
        const output = await trigger(fields as FieldName[], { shouldFocus: true })

        if (!output) {
            console.log("output", output)
            return
        }

        if (currentStep < steps.length - 1) {
            if (currentStep === steps.length - 2) {
                await handleSubmit(processForm)()
            }
            setPreviousStep(currentStep)
            setCurrentStep(step => step + 1)
        }
    }

    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep)
            setCurrentStep(step => step - 1)
        }
    }


    return (
        <>
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>



                    <form onSubmit={handleSubmit(processForm)} className="space-y-8">
                        {currentStep === 0 && (
                            <div className="flex h-full w-full items-center justify-center border">
                                <div className="flex flex-col items-center justify-center">

                                    <Button variant="default" className='bg-black text-white'>Upload CSV</Button>


                                    <div className="flex w-full items-center justify-center gap-[0.2rem]">
                                        <div className="mt-1 w-full border-b text-[#94A3B8B2]"></div>
                                        <div className="text-[1rem] font-medium leading-[2.4rem] text-[#94A3B8B2]">
                                            or
                                        </div>
                                        <div className="mt-1 w-full border-b text-[#94A3B8B2]"></div>
                                    </div>
                                    <Button onClick={() => setCurrentStep(currentStep + 1)} variant="outline" >Enter Mannualy</Button>
                                </div>
                            </div>
                        )}
                        {currentStep === 1 ? (
                            <>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="text" id="name" placeholder="Name" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    {/* <Label htmlFor="position">Position</Label>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-full justify-between"
                                            >
                                                {value
                                                    ? POSITION_DROPDWON.find((framework) => framework.value === value)?.label
                                                    : "Select member position..."}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Search framework..." />
                                                <CommandEmpty>No framework found.</CommandEmpty>
                                                <CommandGroup  >
                                                    {POSITION_DROPDWON.map((framework) => (
                                                        <CommandItem
                                                            key={framework.value}
                                                            value={framework.value}
                                                            onSelect={(currentValue) => {
                                                                setValue(currentValue === value ? "" : currentValue)
                                                                register('position', { value: currentValue })
                                                                setOpen(false)
                                                            }}

                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    value === framework.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            {framework.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    {errors.position?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.position.message}
                                        </p>
                                    )} */}
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    {/* <Label htmlFor="current_year">Current Year of study</Label>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-[200px] justify-between"
                                            >
                                                {value
                                                    ? frameworks.find((framework) => framework.value === value)?.label
                                                    : "Select framework..."}
                                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search framework..." className="h-9" />
                                                <CommandEmpty>No framework found.</CommandEmpty>
                                                <CommandGroup>
                                                    {frameworks.map((framework) => (
                                                        <CommandItem
                                                            key={framework.value}
                                                            value={framework.value}
                                                            onSelect={(currentValue) => {
                                                                setValue(currentValue === value ? "" : currentValue)
                                                                setOpen(false)
                                                            }}
                                                        >
                                                            {framework.label}
                                                            <CheckIcon
                                                                className={cn(
                                                                    "ml-auto h-4 w-4",
                                                                    value === framework.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    {errors.position?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.position.message}
                                        </p>
                                    )} */}
                                </div>


                                {/* Branch of study */}
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="branch">Branch</Label>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-full justify-between"
                                            >
                                                {value
                                                    ? BRANCH_DROPDOWN.find((framework) => framework.value === value)?.label
                                                    : "Select member position..."}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Search framework..." />
                                                <CommandEmpty>No framework found.</CommandEmpty>
                                                <CommandGroup  >
                                                    {BRANCH_DROPDOWN.map((framework) => (
                                                        <CommandItem
                                                            key={framework.value}
                                                            value={framework.value}
                                                            onSelect={(currentValue) => {
                                                                setValue(currentValue === value ? "" : currentValue)
                                                                register('branch', { value: currentValue })
                                                                setOpen(false)
                                                            }}

                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    value === framework.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            {framework.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="roll_number">Roll Number</Label>
                                    <Input type="text" id="roll_number" placeholder="Roll Number" />
                                    {errors.roll_number?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.roll_number.message}
                                        </p>
                                    )}
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="kiit_email_id">Kiit Email Id</Label>
                                    <Input type="text" id="kiit_email_id" placeholder="KIIT Email Id" />
                                    {errors.kiit_email_id?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.kiit_email_id.message}
                                        </p>
                                    )}
                                </div>
                                <div className="flex items-center justify-between">
                                    <Button onClick={prev} variant='outline'>Prev</Button>
                                    <Button onClick={next} variant='default' className='bg-black text-white' >Next</Button>
                                </div>
                            </>
                        ) : ""}
                        {currentStep === 2 ? (
                            <>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="personal_email_id">Perosonal Email Id</Label>
                                    <Input type="text" id="personal_email_id" placeholder="Perosnal Email Id " />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input type="text" id="phone" placeholder="Phone " />
                                </div>

                                <div className="flex items-center justify-between">
                                    <Button onClick={prev} variant='outline'>Prev</Button>
                                    <Button onClick={next} variant='default' className='bg-black text-white' >Next</Button>
                                </div>
                            </>
                        ) : ""}
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddMemberForm

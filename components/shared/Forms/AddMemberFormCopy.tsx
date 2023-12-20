'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { MemberSchemaFormData } from '@/lib/validations'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForm, SubmitHandler } from 'react-hook-form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DOMAIN_DROPDOWN, POSITION_DROPDWON } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'

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
import { ChevronsUpDown, Check } from 'lucide-react'

const steps1 = {
    member: [
        {
            id: "Step 1",
            name: "Input Format",
        },
        {
            id: "Step 2",
            name: "personal info",
            fields: ["Name", "RollNumber", "Gender", "Year"],
        },
        {
            id: "Step 3",
            name: "technical info",
            fields: ["YearOfRecruitment", "Stream", "Domain"],
        },
        { id: "Step 4", name: "Complete" },
    ],
}

interface AddMemberFormProps {
    value: keyof typeof steps1; // Ensure value is one of the keys of steps1
    onClickFunction: () => void;
}

type MemberInput = z.infer<typeof MemberSchemaFormData>;


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

const AddMemberFormCopy: React.FC<AddMemberFormProps> = () => {


    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    // variables to control the state of the form
    const [currentData, setCurrentData] = useState<any>(null);
    const [previousStep, setPreviousStep] = useState(0); // to control previous button
    const [currentStep, setCurrentStep] = useState(0); // to control next button

    // handling form
    const [isSubmitting, setIsSubmitting] = useState(false)
    const editorRef = useRef(1)
    const router = useRouter()
    const pathname = usePathname()

    // defining the form
    const form = useForm<z.infer<typeof MemberSchemaFormData>>({
        resolver: zodResolver(MemberSchemaFormData),
        defaultValues: {
            name: '',
            type: '',
            roll_number: '',
            kiit_email_id: '',
            personal_email_id: '',
            phone: '',
            current_year: '',
            branch: '',
            domain: '',
            year_of_recruitment: '',

        }
    })

    // defining the submit handler
    async function onSubmitFunction(values: z.infer<typeof MemberSchemaFormData>) {
        setIsSubmitting(true)
        console.log("values ", values)
    }


    useEffect(() => {
        setCurrentData(steps1[value]);
    }, [value]);

    const {
        register,
        handleSubmit,
        reset,
        trigger,
        formState: { errors },
    } = useForm<MemberInput>({
        resolver: zodResolver(MemberSchemaFormData),
    });


    type FieldName = keyof MemberInput;


    // for date
    const date = new Date().getFullYear();

    const next = async () => {
        // const fields = currentData[currentStep].fields;
        // const output = await trigger(fields as FieldName[], { shouldFocus: true });
        // if (!output && value === "member") return;

        // if (currentStep < currentData.length - 1) {
        //     if (currentStep === currentData.length - 2 && value === "member") {
        //         await handleSubmit(processForm)();
        //     }
        //     setPreviousStep(currentStep);
        // }
        setCurrentStep((step) => step + 1);
    };

    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step - 1);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Member</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle >Add new member</DialogTitle>
                    <DialogDescription>
                        Add a new member or add members in batches by dragging in a csv file. Members can add details later on.
                    </DialogDescription>
                </DialogHeader>
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
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmitFunction)} className="space-y-8">
                        {currentStep === 1 && (
                            <>
                                {/* <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is member public display name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                /> */}
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" placeholder="Email" />
                                </div>


                                <FormField
                                    control={form.control}
                                    name="type"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Position</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Position" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className='cursor-pointer bg-white' >
                                                    <SelectItem value="member" className='cursor-pointer hover:border-2'>Member</SelectItem>
                                                    <SelectItem value="lead" className='cursor-pointer hover:border-2'>Lead</SelectItem>
                                                    <SelectItem value="vice_lead" className='cursor-pointer hover:border-2'>Vice Lead</SelectItem>
                                                    <SelectItem value="tech_lead" className='cursor-pointer hover:border-2'>Tech Lead</SelectItem>
                                                    <SelectItem value="PR_lead" className='cursor-pointer hover:border-2'>PR Lead</SelectItem>
                                                    <SelectItem value="CR_lead" className='cursor-pointer hover:border-2'>CR Lead</SelectItem>
                                                    <SelectItem value="executive" className='cursor-pointer hover:border-2'>Executive</SelectItem>
                                                    <SelectItem value="creative_lead" className='cursor-pointer hover:border-2'>Creative Lead</SelectItem>
                                                    <SelectItem value="design_lead" className='cursor-pointer hover:border-2'>Design Lead</SelectItem>
                                                    <SelectItem value="ar_lead" className='cursor-pointer hover:border-2'>AR Lead</SelectItem>
                                                    <SelectItem value="vr_lead" className='cursor-pointer hover:border-2'>VR Lead</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />



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
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Search framework..." />
                                            <CommandEmpty>No framework found.</CommandEmpty>
                                            <CommandGroup  >
                                                {frameworks.map((framework) => (
                                                    <CommandItem
                                                        key={framework.value}
                                                        value={framework.value}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue)
                                                            register('country', { value: currentValue })
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

                                <FormField
                                    control={form.control}
                                    name="roll_number"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Roll Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="kiit_email_id"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>KIIT email Id</FormLabel>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex items-center justify-between">
                                    <Button onClick={prev} variant='outline'>Prev</Button>
                                    <Button onClick={next} variant='default' className='bg-black text-white' >Next</Button>
                                </div>
                            </>
                        )}
                        {currentStep === 2 && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="personal_email_id"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Perosnal email Id</FormLabel>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Phone" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is member public display name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="current_year"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Current Year</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Current Year" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className='cursor-pointer bg-white' >
                                                    <SelectItem value="1" className='cursor-pointer hover:border-2'>1</SelectItem>
                                                    <SelectItem value="2" className='cursor-pointer hover:border-2'>2</SelectItem>
                                                    <SelectItem value="3" className='cursor-pointer hover:border-2'>3</SelectItem>
                                                    <SelectItem value="4" className='cursor-pointer hover:border-2'>4</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="branch"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Branch</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Branch" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className='cursor-pointer bg-white' >
                                                    <SelectItem value="CSE" className='cursor-pointer hover:border-2'>Computer Science</SelectItem>
                                                    <SelectItem value="ECE" className='cursor-pointer hover:border-2'>Electronics and Communication</SelectItem>
                                                    <SelectItem value="EEE" className='cursor-pointer hover:border-2'>Electronics and electrical engineering</SelectItem>
                                                    <SelectItem value="ME" className='cursor-pointer hover:border-2'>Mechanical Engineering</SelectItem>
                                                    <SelectItem value="IT" className='cursor-pointer hover:border-2'>Information Technology</SelectItem>
                                                    <SelectItem value="OTHERS" className='cursor-pointer hover:border-2'>Others</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="domain"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Domain</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Domain" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className='cursor-pointer bg-white' >
                                                    <SelectItem value="web" className='cursor-pointer hover:border-2'>Web Development</SelectItem>
                                                    <SelectItem value="app" className='cursor-pointer hover:border-2'>App Development</SelectItem>
                                                    <SelectItem value="cloud" className='cursor-pointer hover:border-2'>Cloud Computing</SelectItem>
                                                    <SelectItem value="cyber" className='cursor-pointer hover:border-2'>Cybersecurity</SelectItem>
                                                    <SelectItem value="ml" className='cursor-pointer hover:border-2'>Machine Learning</SelectItem>
                                                    <SelectItem value="video_editing" className='cursor-pointer hover:border-2'>Video Editing</SelectItem>
                                                    <SelectItem value="graphics_designing" className='cursor-pointer hover:border-2'>Graphics Designing</SelectItem>
                                                    <SelectItem value="content_writing" className='cursor-pointer hover:border-2'>Content Writing</SelectItem>
                                                    <SelectItem value="corporate_relations" className='cursor-pointer hover:border-2'>Corporate Relations</SelectItem>
                                                    <SelectItem value="public_relations" className='cursor-pointer hover:border-2'>Public Relations</SelectItem>
                                                    <SelectItem value="creative" className='cursor-pointer hover:border-2'>Creative</SelectItem>
                                                    <SelectItem value="design" className='cursor-pointer hover:border-2'>Design</SelectItem>
                                                    <SelectItem value="ar_vr" className='cursor-pointer hover:border-2'>AR/VR</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex items-center justify-between">
                                    <Button onClick={prev} variant='outline'>Prev</Button>
                                    <Button onClick={next} variant='default' className='bg-black text-white' >Next </Button>
                                </div>
                            </>
                        )}
                        {currentStep === 3 && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Recruit Year</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Recruit Year" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className='cursor-pointer bg-white' >
                                                    <SelectItem value="1" className='cursor-pointer hover:border-2'>{date}</SelectItem>
                                                    <SelectItem value="2" className='cursor-pointer hover:border-2'>{date - 1}</SelectItem>
                                                    <SelectItem value="3" className='cursor-pointer hover:border-2'>{date - 2}</SelectItem>
                                                    <SelectItem value="4" className='cursor-pointer hover:border-2'>{date - 3}</SelectItem>
                                                    <SelectItem value="5" className='cursor-pointer hover:border-2'>{date - 4}</SelectItem>
                                                    <SelectItem value="6" className='cursor-pointer hover:border-2'>Older..</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex items-center justify-between">
                                    <Button onClick={prev} variant='outline'>Prev</Button>
                                    <Button onClick={next} variant='default' className='bg-black text-white' >Next</Button>
                                </div>
                            </>
                        )}
                        {currentStep === 4 && (
                            <>
                                <div>
                                    <p>You are about to add new member..</p>
                                    <p>Are you sure the details are correct?</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Button onClick={prev} variant='outline'>Prev</Button>
                                    <Button type='submit' disabled={isSubmitting} variant='default' className='bg-black text-white' >Submit </Button>
                                </div>
                            </>
                        )}
                        <Button type='submit' disabled={isSubmitting} variant='default' className='bg-black text-white' onClick={onSubmitFunction}>Submit </Button>
                    </form>
                </Form>

                {/* <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>

    )
}

export default AddMemberFormCopy

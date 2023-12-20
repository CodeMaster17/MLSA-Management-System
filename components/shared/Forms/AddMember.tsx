'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Check, CheckIcon, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
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
import React from "react"
import { MemberSchemaFormData } from "@/lib/validations"
import { BRANCH_DROPDOWN, POSITION_DROPDWON, YEAR_DROPDOWN } from "@/constants"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { ScrollArea } from "@/components/ui/scroll-area"



const AddMember = () => {

    const FormSchema = z.object({
        name: z.string({
            required_error: "Please enter your name.",
        }),
        position: z.string({
            required_error: "Please select a language.",
        }),
        roll_number: z.string({
            required_error: "Please select a language.",
        }),
        kiit_email_id: z.string({
            required_error: "Please select a language.",
        }),
        personal_email_id: z.string({
            required_error: "Please select a language.",
        }),
        phone: z.string({
            required_error: "Please select a language.",
        }),
        current_year: z.string({
            required_error: "Please select a language.",
        }),
        branch: z.string({
            required_error: "Please select a language.",
        }),
    })
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            position: '',
            roll_number: '',
            kiit_email_id: '',
            personal_email_id: '',
            phone: '',
            current_year: '',
            branch: '',
            // domain: '',
            // year_of_recruitment: '',
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof FormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    return (
        <Sheet>
            <div>
                Hello harsh
            </div>
            <SheetTrigger asChild >
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent className="w-1/2 border-2 border-red-500 bg-white">
                <ScrollArea className="h-full w-full rounded-md border bg-white">
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when youre done.
                        </SheetDescription>
                    </SheetHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 overflow-visible border-2">
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-1/2 border-2">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="shadcn" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This is your public display name.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="position"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Language</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant="outline"
                                                                role="combobox"
                                                                className={cn(
                                                                    "w-[200px] justify-between",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value
                                                                    ? POSITION_DROPDWON.find(
                                                                        (language) => language.value === field.value
                                                                    )?.label
                                                                    : "Select language"}
                                                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[200px] bg-white p-0">
                                                        <Command>
                                                            <CommandInput
                                                                placeholder="Search framework..."
                                                                className="h-9 bg-white"
                                                            />
                                                            <CommandEmpty>No framework found.</CommandEmpty>
                                                            <CommandGroup>
                                                                {POSITION_DROPDWON.map((language) => (
                                                                    <CommandItem
                                                                        value={language.label}
                                                                        key={language.value}
                                                                        onSelect={() => {
                                                                            form.setValue("position", language.value)
                                                                        }}
                                                                        className="bg-white"
                                                                    >
                                                                        {language.label}
                                                                        <CheckIcon
                                                                            className={cn(
                                                                                "ml-auto h-4 w-4",
                                                                                language.value === field.value
                                                                                    ? "opacity-100"
                                                                                    : "opacity-0"
                                                                            )}
                                                                        />
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                                <FormDescription>
                                                    This is the language that will be used in the dashboard.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* current year */}
                                    <FormField
                                        control={form.control}
                                        name="current_year"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Language</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant="outline"
                                                                role="combobox"
                                                                className={cn(
                                                                    "w-[200px] justify-between",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value
                                                                    ? YEAR_DROPDOWN.find(
                                                                        (language) => language.value === field.value
                                                                    )?.label
                                                                    : "Select language"}
                                                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[200px] bg-white p-0">
                                                        <Command>
                                                            <CommandInput
                                                                placeholder="Search framework..."
                                                                className="h-9 bg-white"
                                                            />
                                                            <CommandEmpty>No framework found.</CommandEmpty>
                                                            <CommandGroup>
                                                                {YEAR_DROPDOWN.map((language) => (
                                                                    <CommandItem
                                                                        value={language.label}
                                                                        key={language.value}
                                                                        onSelect={() => {
                                                                            form.setValue("current_year", language.value)
                                                                        }}
                                                                        className="bg-white"
                                                                    >
                                                                        {language.label}
                                                                        <CheckIcon
                                                                            className={cn(
                                                                                "ml-auto h-4 w-4",
                                                                                language.value === field.value
                                                                                    ? "opacity-100"
                                                                                    : "opacity-0"
                                                                            )}
                                                                        />
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                                <FormDescription>
                                                    This is the language that will be used in the dashboard.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="branch"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Language</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant="outline"
                                                                role="combobox"
                                                                className={cn(
                                                                    "w-full justify-between",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value
                                                                    ? BRANCH_DROPDOWN.find(
                                                                        (language) => language.value === field.value
                                                                    )?.label
                                                                    : "Select language"}
                                                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-full bg-white p-0">
                                                        <Command>
                                                            <CommandInput
                                                                placeholder="Search framework..."
                                                                className="h-9 bg-white"
                                                            />
                                                            <CommandEmpty>No framework found.</CommandEmpty>
                                                            <CommandGroup>
                                                                {BRANCH_DROPDOWN.map((language) => (
                                                                    <CommandItem
                                                                        value={language.label}
                                                                        key={language.value}
                                                                        onSelect={() => {
                                                                            form.setValue("current_year", language.value)
                                                                        }}
                                                                        className="w-[400px] bg-white"
                                                                    >
                                                                        {language.label}
                                                                        <CheckIcon
                                                                            className={cn(
                                                                                "ml-auto h-4 w-full",
                                                                                language.value === field.value
                                                                                    ? "opacity-100"
                                                                                    : "opacity-0"
                                                                            )}
                                                                        />
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                                <FormDescription>
                                                    This is the language that will be used in the dashboard.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                                <div className="w-1/2 border-2">
                                    <FormField
                                        control={form.control}
                                        name="roll_number"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Roll Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="shadcn" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This is your public display name.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="kiit_email_id"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>KIIT Email Id</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="shadcn" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This is your public display name.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="personal_email_id"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Personal Email Id</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="shadcn" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This is your public display name.
                                                </FormDescription>
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
                                                    <Input placeholder="shadcn" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This is your public display name.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>


                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>

                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </ScrollArea>
            </SheetContent>

        </Sheet >
    )
}

export default AddMember

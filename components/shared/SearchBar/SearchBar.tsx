import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
    return (
        <div className="flex h-[2.2rem] w-[100%] items-center justify-between rounded-md  border-2 border-[#CBD5E1] outline-none xl:w-[47.5rem]">
            <Input placeholder='Search' className="h-full w-full border-none focus:border-none active:border-none"
            />
            <Image
                src="/icon/search.svg"
                alt="Search-icon"
                width="17"
                height="17"
                className="h-[1.7rem] w-[1.7rem]"
            />
        </div>
    )
}

export default SearchBar

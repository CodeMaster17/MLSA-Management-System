
import AddMember from '@/components/shared/Forms/AddMember'
import SearchBar from '@/components/shared/SearchBar/SearchBar'
import Text from '@/components/shared/Text/Text'

import React from 'react'



const MemberPage = () => {
    return (
        <div className=' flex-row-between w-full border-2 border-red-500 p-2'>
            <Text text='Member' />
            {/* search button */}
            <SearchBar />
            {/* add member button */}
            <AddMember />
        </div>
    )
}

export default MemberPage

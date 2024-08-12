import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import UserForm from './UserForm'

export default function page() {
  return (
    <>
    <div className='flex-1 space-y-4 p-4 pt-6 md:p-8'>
      <div className='flex items-start justify-between'>
        <Heading
          title={`Add User`}
          description='Manage User'
        />
      </div>
      <Separator/>
      <UserForm/>
    </div>
    </>
  )
}

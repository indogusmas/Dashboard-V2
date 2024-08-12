import { Heading } from '@/components/ui/heading'
import React from 'react'

export default function page() {
  return (
    <div className="w-full lg-grid lg:min-h-[600px] lg:grid:cols-2 xl:min-h[800px]">
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <Heading
              title={`Add User`}
              description='Manage User'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

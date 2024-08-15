import { columns } from '@/components/table/user/columns'
import UserTable from '@/components/table/user/usertable'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type paramProps = {
  searchParams: {
    [key: string] : string | string[] | undefined;
  }
}

export default function page({searchParams}: paramProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search ||  null;
  const offset = (page - 1) * pageLimit;

  return (
    <>
      <div className='flex-1 space-y-4 p-4 pt-6 md:p-8'>
        <div className='flex items-start justify-between'>
          <h2 className='text-3xl font-bold tracking-tight'>Manage User</h2>
          <Link
            href={'/dashboard/user/add'}
            className={cn(
              buttonVariants({variant: 'default'})
            )}>
            <Plus className='mr-2 h-4 w-4'/> Add New
          </Link>
        </div>
        <Separator/>
        <UserTable
          columns={columns}
          data={[]}
        />
      </div>
    </>
  )
}

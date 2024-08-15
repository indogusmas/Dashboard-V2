"use client"

import { Input } from '@/components/ui/input'
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import React from 'react'

interface DataTableUserProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}



export default function UserTable<TData,TValue>({
  columns,
  data
}: DataTableUserProps<TData,TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <>
      <Input
        placeholder='Search'
        className='w-full md:max-w-sm'
      />
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
              </TableRow>
            ))}
          </TableHeader>
        </Table>
      </div>
    </>
  )
}

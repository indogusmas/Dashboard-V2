import Header from '@/components/layout/header'
import React from 'react'

export default function layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header/>
      <div className='flex h-screen overflow-hidden'>
        <nav>Navigation</nav>
        <main className='flex-1 overflow-hidden pt-16'>{children}</main>
      </div>
    </>
  )
}

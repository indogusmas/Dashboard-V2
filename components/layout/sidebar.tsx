'use client';

import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import DashboardNav from '../dashboard.nav';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { navItems } from '@/constans/data';

type SidebarProps = {
  className?: string;
}

export default function SideBar({ className }: SidebarProps) {
  const {isMinimized,toggle } = useSidebar();
  const [status,setStatus] =  useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false),500);
  }
  
  return (
    <nav
    className={cn(
      `relative hidden h-screen flex-none border-r z-10 pt-20 md:block`,
      status && 'duration-500',
      !isMinimized ? 'w-72' : 'w-[72px]',
      className
    )}
    >
      <ChevronLeftIcon
        className={cn(
          'absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          isMinimized && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems}/>
          </div>
        </div>
      </div>
    </nav>
  )
}

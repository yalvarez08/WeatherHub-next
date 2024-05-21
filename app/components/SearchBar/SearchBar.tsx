"use client";
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { commandIcon } from '@/app/utils/Icons';
import { Command, CommandInput } from '@/components/ui/command';
import React from 'react'

export const SearchBar = () => {
  return (
    <div className='search-btn'>
        <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="border inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100  ease-in-out duration-200"
          >
            <p className="text-sm text-muted-foreground">Enter location...</p>
            <div className="command dark:bg-[#262626] bg-slate-200  py-[2px] pl-[5px] pr-[7px] rounded-sm ml-[10rem] flex items-center gap-2">
              {commandIcon}
              <span className="text-[9px]">F</span>
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className='p-0'>
            <Command className='rounded-lg border shadow-md'>
                <CommandInput placeholder="Type a command..." />
                <ul className='px-3 pb-2'>
                    <p className='p-2 text-sm text-muted-foreground'>Suggestions</p>
                </ul>
            </Command>
        </DialogContent>
        </Dialog>
    </div>
  )
}

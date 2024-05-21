"use client";
import { Button } from '@/components/ui/button';
import { SearchBar } from './SearchBar/SearchBar';
import { Dropdown } from './Dropdown/Dropdown';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '../context/GlobalContext';
import React from 'react'

const Navbar = () => {
    const router = useRouter();
    const { state } = useGlobalContext();

  return (
    <div className='w-full py-4 flex items-center justify-between'>
        <div className='left'></div>
        <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
            <SearchBar />
            
            <div className='btn-group flex items-center gap-2'>
                <Dropdown />
                <Button className="source-code flex items-center gap-2" 
                onClick={() => { router.push("https://github.com") }}>Source Code</Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
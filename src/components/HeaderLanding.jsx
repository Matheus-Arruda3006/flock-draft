import React from 'react'
import Image from 'next/Image'
import Link from 'next/link'


import {
    AiOutlineHome,
    AiOutlineCode,
    AiOutlineRocket,
    AiOutlineSearch,
    AiOutlineMore,
    AiOutlineUser,
    AiOutlineSetting,
    AiOutlineLogout
} from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { GiBeerStein } from 'react-icons/gi'
import { IoMdMore } from 'react-icons/io'

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import { ThemeSwitch } from './ThemeSwitch'
import HeaderIcon from './HeaderIcon'


export default function HeaderLanding() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='flex sticky top-0 z-50 items-center px-2 py-3 md:px-10 shadow-md'>
            {/* LEFT */}
            <div className='flex items-center'>
                <GiBeerStein className='text-2xl md:text-4xl text-blue-600' />
                <h1 className='midden md:inline ml-2 text-xl md:text-4xl text-blue-600'>Byra</h1>
            </div>

            {/* CENTER */}
            <div className='flex justify-center items-center flex-grow'>
                <div className='flex justify-center items-center space-x-6 md:space-x-2'>
                    <HeaderIcon Icon={AiOutlineHome} />
                    <HeaderIcon Icon={HiOutlineNewspaper} />
                    <HeaderIcon Icon={AiOutlineCode} />
                    <HeaderIcon Icon={AiOutlineRocket} />
                </div>
            </div>

            {/* RIGHT */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                <div className='hidden md:inline'>
                    <ThemeSwitch />
                </div>
                <Link href='/login'>
                    <button class="w-full tracking-wider px-3 md:px-6 py-2 md:py-2.5 text-xs md:text-sm text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Login</button>
                </Link>
            </div>
        </div>
    )
}

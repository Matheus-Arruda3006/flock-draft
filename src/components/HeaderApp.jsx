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
import {IoMdMore} from 'react-icons/io'

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import { ThemeSwitch } from './ThemeSwitch'
import HeaderIcon from './HeaderIcon'


export default function HeaderApp() {

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
                <div className='hidden md:inline-flex ml-2 items-center border-b-2 border-blue-600 py-2 px-2'>
                    <input type="text" className='hidden md:inline-flex flex-shrink dark:text-zinc-300 items-center dark:bg-zinc-900 outline-none max-w-[160px]' placeholder='Search' />
                    <AiOutlineSearch className='text-blue-600 bg-zinc-200 dark:bg-zinc-700 p-1.5 text-3xl rounded-full' />
                </div>
            </div>

            {/* RIGHT */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                <Avatar alt="Avatar" src="https://lh3.googleusercontent.com/a/ALm5wu1t_Ay9tjcVsfLs62kZiNEtGvWuNkBQclFgrEKmKg=s192-c-rg-br100"
                 sx={{ width: 40, height: 40 }}/>
                <p className='hidden md:inline whitespace-nowrap font-semibold pr-3'>Gabriel Camacho</p>

                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    className='hidden md:inline'
                >
                    <IoMdMore className='text-gray-800 dark:text-gray-200 dark:bg-zinc-700 p-1.5 text-3xl rounded-full' />
                </IconButton>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}><AiOutlineUser className='mr-2'/>Profile</MenuItem>
                    <MenuItem onClick={handleClose}><AiOutlineSetting className='mr-2'/>Settings</MenuItem>
                    <MenuItem onClick={handleClose}><AiOutlineLogout className='mr-2'/>Logout</MenuItem>
                </Menu>

            </div>
        </div>
    )
}

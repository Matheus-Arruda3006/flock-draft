import React from 'react'
import Link from 'next/link'

export default function HeaderIcon({ Icon, active }) {
  return (
    <div className='cursor-pointer md:px-8 sm:h-14 md:hover:bg-gray-100 dark:md:hover:bg-zinc-800 flex items-center rounded-xl active:border-b-2 dark:active:border-b-zinc-700 group'>
        <Icon className={`text-lg text-gray-800 dark:text-gray-200 mx-auto md:text-2xl text-center group-hover:text-blue-600 ${active && "text-blue-600"}`}/>
    </div>
  )
}

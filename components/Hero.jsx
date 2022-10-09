import React from 'react'


export default function Hero() {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-image'>
        {/* Overlay */}
        <div/>
        <div>
            <h2>Heading</h2>
            <p>Message</p>
            <button>Book</button>
        </div>
    </div>
  )
}

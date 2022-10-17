import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'


 
const logoFlock = new URL('../src/assets/svg/logo-flock-tech.png', import.meta.url)

function Index() {
    const [show, setShow] = useState(false);
    return (
        <div className=" pb-12 overflow-y-hidden">
            {/* Code block starts */}
            
            <dh-component>   
                <section className="main-container">
                <div className="z-0 custom-logo">
                <img src={logoFlock} alt="" />
                 </div>
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        </div>
                        <div className="flex justify-center items-center" style={{ minHeight: 500 }}>
                            <Link href='https://api.whatsapp.com/send?phone=5565993066069&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20tenho%20interesse%20em%20saber%20mais...'>
                            <button className="custom-button z-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Fale com um consultor</button>
                            </Link>
                                                     
                        </div>
                    </div>
                </section>
            </dh-component>
            {/* Code block ends */}
        </div>

    );
}

export default Index;

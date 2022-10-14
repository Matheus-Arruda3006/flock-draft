import React from "react";
import Image from 'next/image';
import Nord from '../src/assets/svg/imgnord.png';
import MegaNord from '../src/assets/svg/meganordeste.png';
import Nika from '../src/assets/svg/logonika.png';
import DmImobiliaria from '../src/assets/svg/logodm.png'
import Dentista from '../src/assets/svg/logodentista.png'
import RadarAuto from '../src/assets/svg/logohorizontal.png'
import CuiabaLar from '../src/assets/svg/logocuiabalar.png'
import FernandaPio from '../src/assets/svg/logofernanda.png'
import LuccianeLogo from '../src/assets/svg/logolucciane.png'


function Index() {
    return (
        <div className="container mx-auto pt-16">
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">Olha um pouco da galera que atendemos!</h1>
                <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">Até hoje a parceria está cada vez mais forte, resultado de muito trabalho e comprometimento.</p>
            </div>
            <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <Image src={Nord} alt='logo-nordeste' />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <Image src={MegaNord} alt='logo-meganordeste' />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <Image src={LuccianeLogo} alt='logo-lucciane'/>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <Image src={FernandaPio} alt='logo-fernanda'/>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <Image src={RadarAuto} alt='logo-radar'/>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <Image src={Nika} alt='logo-nika'/>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <Image src={DmImobiliaria} alt='logo-dm'/>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <Image src={CuiabaLar} alt='logo-cuiabalar'/>
                </div>
               
                
            </div>
        </div>
    );
}

export default Index;


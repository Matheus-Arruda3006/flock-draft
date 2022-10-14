import React from "react";
import Image from 'next/image'
import Claudia from '../src/assets/svg/fotoperfilclaudia.jpg';
import Thais from '../src/assets/svg/fotoperfilthais.jpg';
import Sabrina from '../src/assets/svg/fotoperfilsabrina.jpg';
import Marcelya from '../src/assets/svg/fotoperfilhalinemarcelya.jpg';
import FotoStaff from '../src/assets/svg/fotostaff.jpg';

const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Um pouco sobre nós</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">A maioria das pessoas antes de comprar um produto costuma pesquisar sobre este produto nas redes sociais, por isso é tão importante se destacar.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <Image src={FotoStaff} width={900} height={650}/>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">A união, força</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">e entrosamento de um time, faz toda a diferença nos resultados.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image src={Claudia} width={600} height={800}/> 
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Cláudia Cordeiro</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image src={Thais} width={600} height={800}/>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Thais Regina </p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image src={Sabrina} width={600} height={800}/>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Sabrina</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image src={Marcelya} width={600} height={800}/>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Marcelya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;

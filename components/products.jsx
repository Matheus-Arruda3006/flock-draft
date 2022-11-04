import React from "react";
import { AiOutLineHeart } from 'react-icons/ai'
import Image from 'next/image';



export default function IndexPage() {
    return (
        <>
            <div className="bg-gray-100 ">
                {/* Remove py-8 */}
                <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src="https://cdn.dribbble.com/userupload/3013484/file/original-430c4f5c6c2a2d81a9e96d8e28052309.png?compress=1&resize=1024x768" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                       <Image src=""/>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Novo</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">E-mails corporativos</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">E-mail profissional para a sua empresa.</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">6 meses de garantia.</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Suporte total</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Cuiabá, Mato-Grosso</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}
                        {/* Card 2 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5
                                         4.5 0 00-6.364 0z"/></svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Novo</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Registro de dominio e hospedagens;</h2>
                                        <p className="text-xs text-gray-600 pl-5"></p>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Registro do dominio e da hospedagem da maneira que você desejar.<br/><br/>flockmarketingtecnologia.com.br</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">6 meses de garantia.</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Suporte total.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Cuiabá, Mato-Grosso</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 Ends */}
                        {/* Card 3  */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5
                                         4.5 0 00-6.364 0z"/></svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Novo</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Criação de sites e landing pages</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Criação de páginas institucionais, landing pages ou ecommerce.</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">1 ano de garantia</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Suporte total</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Cuiabá, Mato-Grosso</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 Ends */}
                        {/* Card 4  */}
                        <div className="w-72 mx-2 lg:mb-0 mb-8">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5
                                         4.5 0 00-6.364 0z"/></svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Novo</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Criação de plataformas web</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Plataformas baseadas no que você deseja para o seu negócio.</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">1 ano de garantia</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Suporte total</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Cuiabá, Mato-Grosso</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 Ends */}
                    </div>
                </div>
            </div>
        </>
    );
}

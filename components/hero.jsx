import React, { useState } from "react";
function Index() {
    const [show, setShow] = useState(false);
    return (
        <div className="bg-gray-100 pb-12 overflow-y-hidden" style={{ minHeight: 800 }}>
            {/* Code block starts */}
            <dh-component>   
                <div className="bg-gray-100">
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">Criação de conteúdo e mídias sociais.</p>
                        </div>
                        <div className="flex justify-center items-center" style={{minHeight: 800}}>
                            <button className=" z-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Fale com um consultor</button>                         
                        </div>
                    </div>
                </div>
            </dh-component>
            {/* Code block ends */}
        </div>

    );
}

export default Index;

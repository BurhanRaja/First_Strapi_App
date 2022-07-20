import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='bg-slate-600'>
                <header class="text-white body-font">
                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
                            <img src='/logo.svg' width={35} alt="Logo" className='text-white'/>
                            <span class="ml-3 text-xl cursor-pointer font-semibold text-white">MyShop</span>
                        </a>
                        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                            <a class="mr-5 hover:text-gray-400 cursor-pointer">About</a>
                            <a class="mr-5 hover:text-gray-400 cursor-pointer">Products</a>
                            <a class="mr-5 hover:text-gray-400 cursor-pointer">Contact Us</a>
                        </nav>
                        <button class="inline-flex items-center bg-sky-600 border-0 py-1 px-3 focus:outline-none hover:bg-sky-800 rounded text-base mt-4 md:mt-0 text-white">Order Now
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Navbar
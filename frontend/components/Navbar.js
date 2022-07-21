import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <div className='bg-slate-800'>
                <header className="text-white body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
                            <img src='/logo.svg' width={35} alt="Logo" className='text-white'/>
                            <span className="ml-3 text-xl cursor-pointer font-semibold text-white">MyShop</span>
                        </a>
                        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                            <Link href="/about"><a className="mr-5 hover:text-gray-200 cursor-pointer">About</a></Link>
                            <Link href="/products"><a className="mr-5 hover:text-gray-200 cursor-pointer">Products</a></Link>
                            <Link href="/contact"><a className="mr-5 hover:text-gray-200 cursor-pointer">Contact Us</a></Link>
                            <Link href="/cart"><a className="mr-5 hover:text-gray-200 cursor-pointer">Cart</a></Link>
                        </nav>
                        <button className="inline-flex items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-sky-400 rounded text-base mt-4 md:mt-0 text-white mx-2">
                            Login
                        </button>
                        <button className="inline-flex items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-sky-400 rounded text-base mt-4 md:mt-0 text-white mx-2">
                            SignUp
                        </button>
                        </div>
                </header>
            </div>
        </div>
    )
}

export default Navbar
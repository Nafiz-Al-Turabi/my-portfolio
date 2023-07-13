import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <nav className="fixed w-full bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-12 "
                                src="https://i.ibb.co/DQT39kk/logo-Portfolio.png"
                                alt="Logo"
                            />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <Link href="#" className="NavLink">About</Link>
                            <Link href="#" className="NavLink">Experience</Link>
                            <Link href="#" className="NavLink">Projects</Link>
                            <Link href="#" className="NavLink">Contact</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:bg-gray-800 focus:text-white transition duration-300 ${isOpen ? "cross" : "hamburger"
                                }`}
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >


                            {!isOpen ? (
                                <AiOutlineMenu className="text-2xl" />

                            ) : (
                                <AiOutlineClose className="text-2xl" />

                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 sm:px-3 block">
                        <Link href="#" className="NavLink block">About</Link>
                        <Link href="#" className="NavLink block">Experience</Link>
                        <Link href="#" className="NavLink block">Projects</Link>
                        <Link href="#" className="NavLink block">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import React, { useState, useContext } from 'react';
import { ThemeContext } from '../assets/ThemeContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            {/* Navbar container */}
            <div className='navbar-wrapper'>
                <nav className={`h-20 w-full flex items-center justify-between px-6 shadow-3xl ${isDarkMode ? 'text-white shadow-white shadow-line' : 'text-gray-600 bg-white'}`}>
                    {/* Logo Section */}
                    <div className="font-cursive2 text-4xl font-extrabold hover:cursor-pointer underline underline-offset-2 decoration-2">
                        <h1 className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Subhas Mondal</h1>
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex text-xl gap-7 items-center">
                        <li className={`cursor-pointer nav-link ${isDarkMode ? 'hover:text-yellow-300' : 'hover:text-black light-nav-link'}`}>Skills</li>
                        <li className={`cursor-pointer nav-link ${isDarkMode ? 'hover:text-yellow-300' : 'hover:text-black light-nav-link'}`}>Projects</li>
                        <li className={`cursor-pointer nav-link ${isDarkMode ? 'hover:text-yellow-300' : 'hover:text-black light-nav-link'}`}>Contact Me</li>

                        {/* Theme Toggle Button for Desktop */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                            className="p-2 rounded-full focus:outline-none"
                        >
                            {isDarkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-300 hover:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black hover:text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            )}
                        </button>
                    </ul>

                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden text-gray-600 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={isDarkMode ? 'size-8 text-yellow-300' : 'size-8 text-black'}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={isDarkMode ? 'size-8 text-yellow-300' : 'size-8 text-black'}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        )}
                    </button>

                    {/* Mobile Dropdown Menu */}
                    {isOpen && (
                        <ul className={`absolute top-20 left-0 w-full ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'} text-center text-xl py-4 shadow-lg md:hidden ${isOpen ? 'slide-fade-in' : 'slide-fade-out'}`}>
                            <li className={`py-3 ${isDarkMode ? 'hover:text-yellow-300' : 'hover:text-gray-800'}`} onClick={() => setIsOpen(false)}>Skills</li>
                            <li className={`py-3 ${isDarkMode ? 'hover:text-yellow-300' : 'hover:text-gray-800'}`} onClick={() => setIsOpen(false)}>Projects</li>
                            <li className={`py-3 ${isDarkMode ? 'hover:text-yellow-300' : 'hover:text-gray-800'}`} onClick={() => setIsOpen(false)}>Contact Me</li>

                            {/* Theme Toggle Button for Mobile */}
                            <li className="py-2">
                                <button
                                    onClick={toggleTheme}
                                    aria-label="Toggle dark mode"
                                    className="p-2 rounded-full focus:outline-none"
                                >
                                    {isDarkMode ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-300">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                        </svg>
                                    )}
                                </button>
                            </li>
                        </ul>
                    )}
                </nav>

                <style jsx>{`
                    .navbar-wrapper {
                        position: relative;
                    }

                    .nav-link {
                        position: relative;
                        padding-bottom: 8px;
                        transition: color 0.3s ease;
                    }

                    .nav-link::before {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                        background-color: #ADD8E6;
                        visibility: hidden;
                        transition: all 0.3s ease-in-out;
                    }

                    .nav-link:hover::before {
                        visibility: visible;
                        width: 100%;
                    }

                    .light-nav-link {
                        position: relative;
                        padding-bottom: 8px;
                        transition: color 0.3s ease;
                    }

                    .light-nav-link::before {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                        background-color: #000;
                        visibility: hidden;
                        transition: all 0.3s ease-in-out;
                    }

                    .light-nav-link:hover::before {
                        visibility: visible;
                        width: 100%;
                    }

                    /* Animation for Mobile Menu Opening */
                    @keyframes slideFadeIn {
                        from {
                            transform: translateY(-20px);
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }

                    .slide-fade-in {
                        animation: slideFadeIn 0.5s ease forwards;
                    }

                    /* Animation for Mobile Menu Closing */
                    @keyframes slideFadeOut {
                        from {
                            transform: translateY(0);
                            opacity: 1;
                        }
                        to {
                            transform: translateY(-20px);
                            opacity: 0;
                        }
                    }

                    .slide-fade-out {
                        animation: slideFadeOut 0.5s ease forwards;
                    }
                `}</style>
            </div>
        </>
    );
}

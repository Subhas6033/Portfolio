import React, { useContext } from 'react';
import { ThemeContext } from '../assets/ThemeContext';
import Slide from './Slide';

export default function Skill() {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={`flex flex-col items-center  ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
            {/* Apply Slide animation to title */}
            <Slide delay={0}>
                <div className={`text-center text-4xl rounded w-40 p-1 my-20 font-kode ${isDarkMode ? 'bg-slate-900 text-white shadow-md shadow-white' : 'bg-slate-400 text-black'}`}>
                    <h1  className=''>Skill</h1>
                </div>
            </Slide>

            {/* Apply Slide animation to each skill item */}
            <ul className={`text-center space-y-4 m-8 -mt-10 sm:space-y-0 ${isDarkMode ? ('text-white') : ('')} sm:flex sm:flex-row sm:flex-wrap sm:gap-14`}>
                <Slide delay={0.2}><li className='bg-amber-300 h-10 w-30 p-2 rounded-sm text-center align-middle'>C</li></Slide>
                <Slide delay={0.3}><li className='bg-amber-300 h-10 w-30 p-2 rounded-sm text-center align-middle'>C++</li></Slide>
                <Slide delay={0.4}><li className='bg-amber-300 h-10 w-30 p-2 rounded-sm text-center align-middle'>HTML5</li></Slide>
                <Slide delay={0.5}><li className='bg-amber-300 h-10 w-30 p-2 rounded-sm text-center align-middle'>CSS3</li></Slide>
                <Slide delay={0.6}><li className='bg-amber-300 h-10 w-30 p-2 rounded-sm text-center align-middle'>JavaScript</li></Slide>
                <Slide delay={0.7}><li className='bg-amber-300 h-10 w-30 p-2 rounded-sm text-center align-middle'>Bootstrap</li></Slide>
                <Slide delay={0.8}><li className='bg-amber-300 h-10 w-30 p-2 rounded-sm text-center align-middle'>Tailwind CSS</li></Slide>
                <Slide delay={0.9}><li className='bg-amber-300 h-10 w-30 p-2 rounded-sm text-center align-middle'>React.JS</li></Slide>
            </ul>
        </div>
    );
}

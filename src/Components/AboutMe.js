import React, { useEffect, useState, useContext } from 'react';
import myPicture from '../assets/img/Photo of Me.jpg';
import { motion,useAnimation } from 'framer-motion'
import { ThemeContext } from '../assets/ThemeContext';

export default function AboutMe() {
    const [animationKey, setAnimationKey] = useState(0);
    const { isDarkMode } = useContext(ThemeContext);
    const controls = useAnimation();
    // Typing effect animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationKey(prevKey => prevKey + 1);
        }, 3800);

        return () => clearTimeout(timer);
    }, [animationKey]);

    // Image effect animation
    useEffect(() => {
        controls.start({
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
            },
        });
    }, [controls]);

    return (
        <>
            <div className={`flex flex-col items-center justify-center h-screen -mt-20 sm:-mt-32 sm:flex-row sm:gap-20 px-4 ${isDarkMode ? 'bg-slate-700' : ''}`}>
                {/* Image of me */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={controls}
                    className="w-48 h-48 sm:w-60 sm:h-60"
                >
                    <img
                        src={myPicture}
                        alt="pic of me"
                        className="w-full h-full object-cover rounded-full"
                        loading='lazy'
                    />
                </motion.div>

                {/* About me section */}
                <div className={`w-full max-w-lg p-4 rounded-md text-center mt-6 shadow-md ${isDarkMode ? 'bg-slate-900 text-white shadow-white' : 'bg-slate-300 text-black shadow-simple'}`}>
                    <p className="text-lg sm:text-xl leading-snug sm:leading-10">
                        <span className="typewriter-effect font-kode" key={animationKey}>
                            Hello, I am{' '}
                            <b className="text-orange-500 text-xl sm:text-2xl underline">
                                <i>Subhas Mondal.</i>
                            </b>
                        </span>
                        <br /> Web Developer.
                    </p>

                    {/* Divider */}
                    <div className="flex justify-center mt-2">
                        <div className={`h-0 w-2/3 sm:w-3/4 border-2 ${isDarkMode ? 'border-red-600' : 'border-blue-600'}`}></div>
                    </div>

                    {/* AboutMe paragraph */}
                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-justify sm:text-center">
                        <p>
                            I am a passionate Web developer from India. I love to code and
                            build things. I am currently pursuing my B.Tech in Information
                            Technology from Jalpaiguri Government Engineering College. I am
                            always looking for opportunities to learn and grow.
                        </p>
                    </div>
                </div>
            </div>

            {/* Official Records */}
            <div className="h-0 -mt-4 flex justify-center items-center m-4">
                <div className="h-40 w-96 -mt-16 sm:-mt-40 flex justify-center items-center">
                    <ul className="flex flex-row gap-7 sm:gap-32">
                        <li
                            className={`h-20 w-20 border-2 border-black rounded grid place-content-center hover:cursor-pointer shadow-sm ${isDarkMode ? 'shadow-white' : ''}`}
                            title="Download CV"
                        >
                            CV
                        </li>
                        <li
                            className={`h-20 w-20 border-2 border-black rounded grid place-content-center hover:cursor-pointer shadow-sm ${isDarkMode ? 'shadow-white' : ''}`}
                            title="Visit Github"
                        >
                            Github
                        </li>
                        <li
                            className={`h-20 w-20 border-2 border-black rounded grid place-content-center hover:cursor-pointer shadow-sm ${isDarkMode ? 'shadow-white' : ''}`}
                            title="View LinkedIn Profile"
                        >
                            LinkedIn
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
                @keyframes typewriter {
                    0% { width: 0; }
                    100% { width: 100%; }
                }

                @keyframes blink {
                    50% { border-color: transparent; }
                }

                .typewriter-effect {
                    display: inline-block;
                    overflow: hidden;
                    border-right: 3px solid orange;
                    white-space: nowrap;
                    animation: typewriter 5s steps(500) 0.5s forwards, blink 0.8s step-end infinite;
                    letter-spacing: 0.3px;
                    line-height: 1.5;
                }

                .typewriter-effect.finished {
                    animation: none;
                    border-right: 3px solid transparent;
                }
            `}</style>
        </>
    );
}

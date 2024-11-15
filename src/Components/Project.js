import React, { useContext } from 'react';
import { ThemeContext } from '../assets/ThemeContext';

export default function Project() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
        <div className="flex justify-center items-center">
          <div
            className={`p-2 flex font-kode border-2 border-black rounded ${isDarkMode
                ? 'bg-slate-900 text-white shadow-md shadow-white'
                : 'bg-slate-400 text-black'
              }`}
          >
            <h2 className="text-center">Projects</h2>
          </div>
        </div>

          {/* Projects */}
        <div className={`w-full`}>
            bkvk
          </div>
      </div>
    </>
  );
}

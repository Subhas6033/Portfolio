
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark', !isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

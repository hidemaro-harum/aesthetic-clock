import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    aurora: {
        name: 'aurora',
        label: 'Aurora',
        colors: {
            bg: '#0f172a',
            text: '#f8fafc',
            primary: '#7c3aed',
            secondary: '#06b6d4',
            tertiary: '#ec4899'
        }
    },
    sunset: {
        name: 'sunset',
        label: 'Sunset',
        colors: {
            bg: '#2a1b3d',
            text: '#ffebd3',
            primary: '#ff4d4d',
            secondary: '#f9cb28',
            tertiary: '#7928ca'
        }
    },
    midnight: {
        name: 'midnight',
        label: 'Midnight',
        colors: {
            bg: '#000000',
            text: '#e2e8f0',
            primary: '#38bdf8',
            secondary: '#ffffff',
            tertiary: '#94a3b8'
        }
    }
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('aurora');

    const theme = themes[currentTheme];

    useEffect(() => {
        // Update CSS variables when theme changes
        const root = document.documentElement;
        root.style.setProperty('--bg-color', theme.colors.bg);
        root.style.setProperty('--text-color', theme.colors.text);
        root.style.setProperty('--accent-primary', theme.colors.primary);
        root.style.setProperty('--accent-secondary', theme.colors.secondary);
        root.style.setProperty('--accent-tertiary', theme.colors.tertiary);
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

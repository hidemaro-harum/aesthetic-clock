import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeSwitcher.css';

const ThemeSwitcher = () => {
    const { currentTheme, setCurrentTheme, themes } = useTheme();

    return (
        <div className="theme-switcher glass-panel">
            {Object.values(themes).map((theme) => (
                <button
                    key={theme.name}
                    className={`theme-btn ${currentTheme === theme.name ? 'active' : ''}`}
                    onClick={() => setCurrentTheme(theme.name)}
                    aria-label={`Switch to ${theme.label} theme`}
                >
                    <span
                        className="theme-preview"
                        style={{
                            background: `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                        }}
                    />
                    <span className="theme-label">{theme.label}</span>
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;

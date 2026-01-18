import React, { useState } from 'react';
import '../styles/Controls.css';

const Controls = ({ isVisible, is24Hour, showSeconds, onToggle24Hour, onToggleSeconds }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <div className={`controls-container ${!isVisible ? 'hidden' : ''}`}>
            <button
                className="control-btn"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
                {isFullscreen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" /><path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" /><path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" /></svg>
                )}
            </button>
            <div className="control-toggles">
                <button
                    className={`control-toggle ${is24Hour ? 'active' : ''}`}
                    onClick={onToggle24Hour}
                    aria-pressed={is24Hour}
                >
                    {is24Hour ? '24H' : '12H'}
                </button>
                <button
                    className={`control-toggle ${showSeconds ? 'active' : ''}`}
                    onClick={onToggleSeconds}
                    aria-pressed={showSeconds}
                >
                    {showSeconds ? 'Seconds On' : 'Seconds Off'}
                </button>
            </div>
        </div>
    );
};

export default Controls;

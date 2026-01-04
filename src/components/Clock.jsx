import React from 'react';
import { useTime } from '../hooks/useTime';
import '../styles/Clock.css';

const Clock = () => {
    const { hours, minutes, seconds, year, month, day, weekday } = useTime();

    return (
        <div className="clock-container glass-card">
            <div className="date-display">
                <span className="weekday">{weekday}</span>
                <span className="date">{month} {day}, {year}</span>
            </div>
            <div className="time-display">
                <span className="time-part hours">{hours}</span>
                <span className="separator">:</span>
                <span className="time-part minutes">{minutes}</span>
                <div className="seconds-container">
                    <span className="time-part seconds">{seconds}</span>
                </div>
            </div>
        </div>
    );
};

export default Clock;

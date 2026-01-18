import React from 'react';
import { useTime } from '../hooks/useTime';
import '../styles/Clock.css';

const Clock = ({ is24Hour, showSeconds }) => {
    const { hours, minutes, seconds, year, month, day, weekday } = useTime();
    const hoursNumber = Number(hours);
    const displayHours = is24Hour
        ? hours
        : String(hoursNumber % 12 || 12).padStart(2, '0');
    const period = is24Hour ? null : hoursNumber >= 12 ? 'PM' : 'AM';

    return (
        <div className="clock-container glass-card">
            <div className="date-display">
                <span className="weekday">{weekday}</span>
                <span className="date">{month} {day}, {year}</span>
            </div>
            <div className="time-display">
                <span className="time-part hours">{displayHours}</span>
                <span className="separator">:</span>
                <span className="time-part minutes">{minutes}</span>
                {showSeconds ? (
                    <div className="seconds-container">
                        <span className="time-part seconds">{seconds}</span>
                    </div>
                ) : null}
                {period ? <span className="period">{period}</span> : null}
            </div>
        </div>
    );
};

export default Clock;

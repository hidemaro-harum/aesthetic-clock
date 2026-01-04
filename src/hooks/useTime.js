import { useState, useEffect } from 'react';

export const useTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return {
            hours: date.getHours().toString().padStart(2, '0'),
            minutes: date.getMinutes().toString().padStart(2, '0'),
            seconds: date.getSeconds().toString().padStart(2, '0'),
            // For getting date parts
            year: date.getFullYear(),
            month: date.toLocaleString('default', { month: 'long' }),
            day: date.getDate(),
            weekday: date.toLocaleString('default', { weekday: 'long' }),
        };
    };

    return formatTime(time);
};

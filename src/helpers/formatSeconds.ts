import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const formatSeconds = (seconds: string | number, format: string = 'HH[h] mm[m] ss.SSS[s]') => {
    const ms = +((+seconds) * 1000).toFixed(0)
    const formattedTime = dayjs.duration(ms, 'milliseconds').format(format);
    return formattedTime
}

export const formatMilliSeconds = (milliseconds: string | number, format: string = 'HH[h] mm[m] ss.SSS[s]') => {
    const ms = +milliseconds
    const formattedTime = dayjs.duration(ms, 'milliseconds').format(format);
    return formattedTime
}
import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
import process from 'process';

const logDir = `${process.cwd()}/logs`;
const appName = 'e-avp-mqtt';

const timezoned = () => {
    return new Date().toLocaleString('en-US', {
        timeZone: 'Asia/seoul'
    });
}

export const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: timezoned }),
        format.prettyPrint(),
        format.splat(),
        format.ms(),
        format.simple(),
        format.prettyPrint()
    ),
    transports: [
        new transports.DailyRotateFile({
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            dirname: `${logDir}`,
            filename:  `${appName}-out.log`,
            format: format.combine(
                format.timestamp({ format: timezoned }),
                format.prettyPrint(),
                format.splat(),
                format.ms(),
                format.simple(),
                format.prettyPrint()
            ),
            maxSize: null,
        }),
        new transports.DailyRotateFile({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: `${logDir}`,
            filename: `${appName}-error.log`,
            format: format.combine(
                format.timestamp({ format: timezoned }),
                format.errors({ stack: true }),
                format.prettyPrint(),
                format.splat(),
                format.ms(),
                format.simple(),
                format.prettyPrint()
            ),
            maxSize: null
        }),
        new transports.Console()
    ]
});

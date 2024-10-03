import { format } from 'date-fns';

export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

class Logger {
  private logs: string[] = [];

  log(level: LogLevel, message: string) {
    const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const logEntry = `[${timestamp}] ${level}: ${message}`;
    this.logs.push(logEntry);
    console.log(logEntry);
  }

  info(message: string) {
    this.log(LogLevel.INFO, message);
  }

  warn(message: string) {
    this.log(LogLevel.WARN, message);
  }

  error(message: string) {
    this.log(LogLevel.ERROR, message);
  }

  getLogs() {
    return this.logs;
  }
}

export const logger = new Logger();
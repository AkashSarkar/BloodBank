/// <reference types="node" />
import { ILogger, LogLevel, LoggerOptions } from '../../definitions';
export declare class Logger implements ILogger {
    protected _level: LogLevel;
    prefix: string;
    stream: NodeJS.WritableStream;
    constructor({level, prefix, stream}: LoggerOptions);
    level: LogLevel;
    debug(msg: string): void;
    info(msg: string): void;
    ok(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    msg(msg: string): void;
    nl(num?: number): void;
    shouldLog(level: LogLevel): boolean;
    private log(level, ...args);
}

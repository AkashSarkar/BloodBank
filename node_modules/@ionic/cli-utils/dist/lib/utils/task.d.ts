import * as inquirerType from 'inquirer';
import ui = inquirerType.ui;
import { ConfigFile, ILogger, ITask, ITaskChain } from '../../definitions';
export declare class Task implements ITask {
    msg: string;
    config: ConfigFile;
    log: ILogger;
    bottomBar: ui.BottomBar;
    intervalId?: any;
    running: boolean;
    tickedOff: boolean;
    private spinner;
    progressRatio: number;
    constructor({msg, config, log, bottomBar}: {
        msg: string;
        config: ConfigFile;
        log: ILogger;
        bottomBar: ui.BottomBar;
    });
    start(): this;
    tick(): this;
    progress(prog: number, total: number): this;
    format(): string;
    clear(): this;
    end(): this;
    succeed(): this;
    fail(): this;
}
export declare class TaskChain implements ITaskChain {
    config: ConfigFile;
    log: ILogger;
    bottomBar: ui.BottomBar;
    protected currentTask?: Task;
    tasks: ITask[];
    constructor({config, log, bottomBar}: {
        config: ConfigFile;
        log: ILogger;
        bottomBar: ui.BottomBar;
    });
    next(msg: string): Task;
    updateMsg(msg: string): this;
    end(): this;
    fail(): this;
    cleanup(): this;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const format_1 = require("./format");
class Spinner {
    constructor(frames = format_1.SPINNER_FRAMES) {
        this.frames = frames;
        this.i = 0;
    }
    frame() {
        return this.frames[this.i = ++this.i % this.frames.length];
    }
}
class Task {
    constructor({ msg, config, log, bottomBar }) {
        this.running = false;
        this.tickedOff = false;
        this.progressRatio = -1;
        this.msg = msg;
        this.config = config;
        this.log = log;
        this.bottomBar = bottomBar;
        this.spinner = new Spinner();
    }
    start() {
        if (!this.running) {
            this.intervalId = setInterval(() => { this.tick(); }, 50);
        }
        this.running = true;
        return this;
    }
    tick() {
        if (this.log.shouldLog('info')) {
            if (this.config.cliFlags.interactive || !this.tickedOff) {
                this.bottomBar.updateBottomBar(this.format());
            }
        }
        this.tickedOff = true;
        return this;
    }
    progress(prog, total) {
        this.progressRatio = prog / total;
        this.tick();
        return this;
    }
    format() {
        const progress = this.progressRatio >= 0 ? (this.progressRatio * 100).toFixed(2) : '';
        const frame = this.config.cliFlags.interactive ? this.spinner.frame() : format_1.ICON_ELLIPSIS;
        return `${chalk.bold(frame)} ${this.msg}${progress ? ' (' + chalk.bold(String(progress) + '%') + ')' : ''} `;
    }
    clear() {
        clearInterval(this.intervalId);
        if (this.log.shouldLog('info')) {
            this.bottomBar.updateBottomBar('');
        }
        return this;
    }
    end() {
        this.running = false;
        this.tick();
        this.clear();
        return this;
    }
    succeed() {
        if (this.running) {
            this.end();
            if (this.log.shouldLog('info')) {
                this.log.msg(`${chalk.green(format_1.ICON_SUCCESS)} ${this.msg} - done!`);
            }
        }
        return this;
    }
    fail() {
        if (this.running) {
            this.end();
            if (this.log.shouldLog('info')) {
                this.log.msg(`${chalk.red(format_1.ICON_FAILURE)} ${this.msg} - failed!`);
            }
        }
        return this;
    }
}
exports.Task = Task;
class TaskChain {
    constructor({ config, log, bottomBar }) {
        this.config = config;
        this.log = log;
        this.bottomBar = bottomBar;
        this.tasks = [];
    }
    next(msg) {
        if (this.currentTask) {
            this.currentTask.succeed();
        }
        const task = new Task({ msg, config: this.config, log: this.log, bottomBar: this.bottomBar });
        this.tasks.push(task);
        this.currentTask = task;
        task.start();
        return task;
    }
    updateMsg(msg) {
        if (this.currentTask) {
            this.currentTask.msg = msg;
        }
        return this;
    }
    end() {
        if (this.currentTask) {
            this.currentTask.succeed();
            this.currentTask = undefined;
        }
        return this;
    }
    fail() {
        if (this.currentTask) {
            this.currentTask.fail();
        }
        return this;
    }
    cleanup() {
        for (let task of this.tasks) {
            if (task.running) {
                task.fail();
            }
            task.clear();
        }
        return this;
    }
}
exports.TaskChain = TaskChain;

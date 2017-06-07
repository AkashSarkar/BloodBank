"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const chalk = require("chalk");
const guards_1 = require("../../guards");
const errors_1 = require("../errors");
const format_1 = require("./format");
class Logger {
    constructor({ level = 'info', prefix = '', stream = process.stdout }) {
        this.level = level;
        this.prefix = prefix;
        this.stream = stream;
    }
    get level() {
        return this._level;
    }
    set level(v) {
        const s = v.toLowerCase();
        if (!guards_1.isLogLevel(s)) {
            throw new errors_1.FatalException(`Invalid log level '${chalk.bold(v)}' (choose from: ${guards_1.LOG_LEVELS.map(l => chalk.bold(l)).join(', ')})`);
        }
        this._level = s;
    }
    debug(msg) {
        this.log('debug', msg);
    }
    info(msg) {
        this.log('info', msg);
    }
    ok(msg) {
        this.log('ok', msg);
    }
    warn(msg) {
        this.log('warn', msg);
    }
    error(msg) {
        this.log('error', msg);
    }
    msg(msg) {
        this.stream.write(msg);
    }
    nl(num = 1) {
        this.stream.write('\n'.repeat(num));
    }
    shouldLog(level) {
        return guards_1.LOG_LEVELS.indexOf(level) >= guards_1.LOG_LEVELS.indexOf(this.level);
    }
    log(level, ...args) {
        if (this.shouldLog(level)) {
            let prefix = this.prefix;
            if (prefix) {
                args[0] = util.format(prefix, args[0]);
            }
            for (let [i, arg] of args.entries()) {
                if (typeof arg === 'string') {
                    args[i] = arg.split('\n').map((l, i) => i > 0 ? `${format_1.indent(level.length + 2)} ${l}` : l).join('\n');
                }
            }
            const status = chalk.bold.bgBlack;
            const b = chalk.dim;
            switch (level) {
                case 'debug':
                    this.stream.write(util.format.apply(util, [b('[') + status.dim.magenta('DEBUG') + b(']'), ...args]));
                    break;
                case 'info':
                    this.stream.write(util.format.apply(util, [b('[') + status.gray('INFO') + b(']'), ...args]));
                    break;
                case 'ok':
                    this.stream.write(util.format.apply(util, [b('[') + status.green('OK') + b(']'), ...args]));
                    break;
                case 'warn':
                    this.stream.write(util.format.apply(util, [b('[') + status.yellow('WARN') + b(']'), ...args]));
                    break;
                case 'error':
                    this.stream.write(util.format.apply(util, [b('[') + status.red('ERROR') + b(']'), ...args]));
                    break;
            }
        }
    }
}
exports.Logger = Logger;

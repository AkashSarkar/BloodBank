"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const guards_1 = require("../../guards");
const fs_1 = require("./fs");
const shell_1 = require("./shell");
exports.ERROR_INVALID_PACKAGE_JSON = 'INVALID_PACKAGE_JSON';
exports.ERROR_INVALID_BOWER_JSON = 'INVALID_BOWER_JSON';
let installer;
function readPackageJsonFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield fs_1.fsReadJsonFile(path);
        if (!guards_1.isPackageJson(packageJson)) {
            throw exports.ERROR_INVALID_PACKAGE_JSON;
        }
        return packageJson;
    });
}
exports.readPackageJsonFile = readPackageJsonFile;
function readBowerJsonFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const bowerJson = yield fs_1.fsReadJsonFile(path);
        if (!guards_1.isBowerJson(bowerJson)) {
            throw exports.ERROR_INVALID_BOWER_JSON;
        }
        return bowerJson;
    });
}
exports.readBowerJsonFile = readBowerJsonFile;
function pkgInstallArgs(env, pkg, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = yield env.config.load();
        if (config.cliFlags.yarn) {
            if (!installer) {
                try {
                    yield shell_1.runcmd('yarn', ['--version']);
                    installer = 'yarn';
                }
                catch (e) {
                    if (e.code === 'ENOENT') {
                        env.log.warn(`You have opted into yarn, but ${chalk.green('yarn')} was not found in PATH`);
                    }
                    installer = 'npm';
                }
            }
        }
        else {
            installer = 'npm';
        }
        let installerArgs = [];
        if (installer === 'npm') {
            if (pkg) {
                if (options.link) {
                    installerArgs = ['link', pkg.replace(/(.+)@.+/, '$1')];
                }
                else {
                    if (options.global) {
                        installerArgs = ['install', '-g', pkg];
                    }
                    else {
                        installerArgs = ['install', '--save-dev', '--save-exact', pkg];
                    }
                }
            }
            else {
                installerArgs = ['install'];
            }
        }
        else {
            if (pkg) {
                if (options.link) {
                    installerArgs = ['link', pkg];
                }
                else {
                    if (options.global) {
                        installerArgs = ['global', 'add', '--non-interactive', pkg];
                    }
                    else {
                        installerArgs = ['add', '--non-interactive', '--dev', '--exact', pkg];
                    }
                }
            }
            else {
                installerArgs = ['install', '--non-interactive'];
            }
        }
        return [installer, ...installerArgs];
    });
}
exports.pkgInstallArgs = pkgInstallArgs;

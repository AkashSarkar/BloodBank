import { BowerJson, IonicEnvironment, IShellRunOptions, PackageJson } from '../../definitions';
export declare const ERROR_INVALID_PACKAGE_JSON = "INVALID_PACKAGE_JSON";
export declare const ERROR_INVALID_BOWER_JSON = "INVALID_BOWER_JSON";
export declare function readPackageJsonFile(path: string): Promise<PackageJson>;
export declare function readBowerJsonFile(path: string): Promise<BowerJson>;
export interface PkgInstallOptions extends IShellRunOptions {
    global?: boolean;
    link?: boolean;
}
export declare function pkgInstallArgs(env: IonicEnvironment, pkg?: string, options?: PkgInstallOptions): Promise<string[]>;

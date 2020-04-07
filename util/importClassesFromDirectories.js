"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
/**
 * Loads all exported classes from the given directory.
 */
function importClassesFromDirectories(directories, formats) {
    if (formats === void 0) { formats = [".js", ".ts"]; }
    return __awaiter(this, void 0, void 0, function () {
        var loadFileClasses, allFiles, dirs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    loadFileClasses = function (exported, allLoaded) {
                        if (exported instanceof Function) {
                            allLoaded.push(exported);
                        }
                        else if (exported instanceof Array) {
                            exported.forEach(function (i) { return loadFileClasses(i, allLoaded); });
                        }
                        else if (exported instanceof Object || typeof exported === "object") {
                            Object.keys(exported).forEach(function (key) { return loadFileClasses(exported[key], allLoaded); });
                        }
                        return allLoaded;
                    };
                    allFiles = directories.reduce(function (allDirs, dir) {
                        // Do not glob Network requests
                        var glob = dir.startsWith('https://') ? [dir] : require("glob").sync(path.normalize(dir));
                        return allDirs.concat(glob);
                    }, []);
                    return [4 /*yield*/, Promise.all(allFiles
                            .filter(function (file) {
                            var dtsExtension = file.substring(file.length - 5, file.length);
                            return formats.indexOf(path.extname(file)) !== -1 && dtsExtension !== ".d.ts";
                        })
                            .map(function (file) {
                            // return require(file);
                            return Promise.resolve().then(function () { return require(file); });
                        }))];
                case 1:
                    dirs = _a.sent();
                    return [2 /*return*/, loadFileClasses(dirs, [])];
            }
        });
    });
}
exports.importClassesFromDirectories = importClassesFromDirectories;
//# sourceMappingURL=importClassesFromDirectories.js.map
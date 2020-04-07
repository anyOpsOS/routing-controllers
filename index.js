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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var ExpressDriver_1 = require("./driver/express/ExpressDriver");
var KoaDriver_1 = require("./driver/koa/KoaDriver");
var MetadataArgsStorage_1 = require("./metadata-builder/MetadataArgsStorage");
var RoutingControllers_1 = require("./RoutingControllers");
var importClassesFromDirectories_1 = require("./util/importClassesFromDirectories");
// -------------------------------------------------------------------------
// Main exports
// -------------------------------------------------------------------------
__export(require("./container"));
__export(require("./decorator/Authorized"));
__export(require("./decorator/Body"));
__export(require("./decorator/BodyParam"));
__export(require("./decorator/ContentType"));
__export(require("./decorator/Controller"));
__export(require("./decorator/CookieParam"));
__export(require("./decorator/CookieParams"));
__export(require("./decorator/Ctx"));
__export(require("./decorator/CurrentUser"));
__export(require("./decorator/Delete"));
__export(require("./decorator/Get"));
__export(require("./decorator/Head"));
__export(require("./decorator/Header"));
__export(require("./decorator/HeaderParam"));
__export(require("./decorator/HeaderParams"));
__export(require("./decorator/HttpCode"));
__export(require("./decorator/Interceptor"));
__export(require("./decorator/JsonController"));
__export(require("./decorator/Location"));
__export(require("./decorator/Method"));
__export(require("./decorator/Middleware"));
__export(require("./decorator/OnNull"));
__export(require("./decorator/OnUndefined"));
__export(require("./decorator/Param"));
__export(require("./decorator/Params"));
__export(require("./decorator/Patch"));
__export(require("./decorator/Post"));
__export(require("./decorator/Put"));
__export(require("./decorator/QueryParam"));
__export(require("./decorator/QueryParams"));
__export(require("./decorator/Redirect"));
__export(require("./decorator/Render"));
__export(require("./decorator/Req"));
__export(require("./decorator/Res"));
__export(require("./decorator/ResponseClassTransformOptions"));
__export(require("./decorator/Session"));
__export(require("./decorator/State"));
__export(require("./decorator/UploadedFile"));
__export(require("./decorator/UploadedFiles"));
__export(require("./decorator/UseAfter"));
__export(require("./decorator/UseBefore"));
__export(require("./decorator/UseInterceptor"));
__export(require("./http-error/HttpError"));
__export(require("./http-error/InternalServerError"));
__export(require("./http-error/BadRequestError"));
__export(require("./http-error/ForbiddenError"));
__export(require("./http-error/NotAcceptableError"));
__export(require("./http-error/MethodNotAllowedError"));
__export(require("./http-error/NotFoundError"));
__export(require("./http-error/UnauthorizedError"));
__export(require("./metadata-builder/MetadataArgsStorage"));
__export(require("./metadata/ActionMetadata"));
__export(require("./metadata/ControllerMetadata"));
__export(require("./metadata/InterceptorMetadata"));
__export(require("./metadata/MiddlewareMetadata"));
__export(require("./metadata/ParamMetadata"));
__export(require("./metadata/ResponseHandleMetadata"));
__export(require("./metadata/UseMetadata"));
__export(require("./driver/BaseDriver"));
__export(require("./driver/express/ExpressDriver"));
__export(require("./driver/koa/KoaDriver"));
// -------------------------------------------------------------------------
// Main Functions
// -------------------------------------------------------------------------
/**
 * Gets metadata args storage.
 * Metadata args storage follows the best practices and stores metadata in a global variable.
 */
function getMetadataArgsStorage() {
    if (!global.routingControllersMetadataArgsStorage)
        global.routingControllersMetadataArgsStorage = new MetadataArgsStorage_1.MetadataArgsStorage();
    return global.routingControllersMetadataArgsStorage;
}
exports.getMetadataArgsStorage = getMetadataArgsStorage;
/**
 * Registers all loaded actions in your express application.
 */
function useExpressServer(expressApp, options) {
    var driver = new ExpressDriver_1.ExpressDriver(expressApp);
    return createServer(driver, options);
}
exports.useExpressServer = useExpressServer;
/**
 * Registers all loaded actions in your express application.
 */
function createExpressServer(options) {
    var driver = new ExpressDriver_1.ExpressDriver();
    return createServer(driver, options);
}
exports.createExpressServer = createExpressServer;
/**
 * Registers all loaded actions in your koa application.
 */
function useKoaServer(koaApp, options) {
    var driver = new KoaDriver_1.KoaDriver(koaApp);
    return createServer(driver, options);
}
exports.useKoaServer = useKoaServer;
/**
 * Registers all loaded actions in your koa application.
 */
function createKoaServer(options) {
    var driver = new KoaDriver_1.KoaDriver();
    return createServer(driver, options);
}
exports.createKoaServer = createKoaServer;
/**
 * Registers all loaded actions in your application using selected driver.
 */
function createServer(driver, options) {
    createExecutor(driver, options);
    return driver.app;
}
exports.createServer = createServer;
/**
 * Registers all loaded actions in your express application.
 */
function createExecutor(driver, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var controllerClasses, controllerDirs, _a, _b, _c, middlewareClasses, middlewareDirs, _d, _e, _f, interceptorClasses, interceptorDirs, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    if (!(options && options.controllers && options.controllers.length)) return [3 /*break*/, 2];
                    controllerClasses = options.controllers.filter(function (controller) { return controller instanceof Function; });
                    controllerDirs = options.controllers.filter(function (controller) { return typeof controller === "string"; });
                    _b = (_a = controllerClasses.push).apply;
                    _c = [controllerClasses];
                    return [4 /*yield*/, importClassesFromDirectories_1.importClassesFromDirectories(controllerDirs)];
                case 1:
                    _b.apply(_a, _c.concat([_k.sent()]));
                    _k.label = 2;
                case 2:
                    if (!(options && options.middlewares && options.middlewares.length)) return [3 /*break*/, 4];
                    middlewareClasses = options.middlewares.filter(function (controller) { return controller instanceof Function; });
                    middlewareDirs = options.middlewares.filter(function (controller) { return typeof controller === "string"; });
                    _e = (_d = middlewareClasses.push).apply;
                    _f = [middlewareClasses];
                    return [4 /*yield*/, importClassesFromDirectories_1.importClassesFromDirectories(middlewareDirs)];
                case 3:
                    _e.apply(_d, _f.concat([_k.sent()]));
                    _k.label = 4;
                case 4:
                    if (!(options && options.interceptors && options.interceptors.length)) return [3 /*break*/, 6];
                    interceptorClasses = options.interceptors.filter(function (controller) { return controller instanceof Function; });
                    interceptorDirs = options.interceptors.filter(function (controller) { return typeof controller === "string"; });
                    _h = (_g = interceptorClasses.push).apply;
                    _j = [interceptorClasses];
                    return [4 /*yield*/, importClassesFromDirectories_1.importClassesFromDirectories(interceptorDirs)];
                case 5:
                    _h.apply(_g, _j.concat([_k.sent()]));
                    _k.label = 6;
                case 6:
                    if (options && options.development !== undefined) {
                        driver.developmentMode = options.development;
                    }
                    else {
                        driver.developmentMode = process.env.NODE_ENV !== "production";
                    }
                    if (options.defaultErrorHandler !== undefined) {
                        driver.isDefaultErrorHandlingEnabled = options.defaultErrorHandler;
                    }
                    else {
                        driver.isDefaultErrorHandlingEnabled = true;
                    }
                    if (options.classTransformer !== undefined) {
                        driver.useClassTransformer = options.classTransformer;
                    }
                    else {
                        driver.useClassTransformer = true;
                    }
                    if (options.validation !== undefined) {
                        driver.enableValidation = !!options.validation;
                        if (options.validation instanceof Object)
                            driver.validationOptions = options.validation;
                    }
                    else {
                        driver.enableValidation = true;
                    }
                    driver.classToPlainTransformOptions = options.classToPlainTransformOptions;
                    driver.plainToClassTransformOptions = options.plainToClassTransformOptions;
                    if (options.errorOverridingMap !== undefined)
                        driver.errorOverridingMap = options.errorOverridingMap;
                    if (options.routePrefix !== undefined)
                        driver.routePrefix = options.routePrefix;
                    if (options.currentUserChecker !== undefined)
                        driver.currentUserChecker = options.currentUserChecker;
                    if (options.authorizationChecker !== undefined)
                        driver.authorizationChecker = options.authorizationChecker;
                    driver.cors = options.cors;
                    // next create a controller executor
                    new RoutingControllers_1.RoutingControllers(driver, options)
                        .initialize()
                        .registerInterceptors(interceptorClasses)
                        .registerMiddlewares("before", middlewareClasses)
                        .registerControllers(controllerClasses)
                        .registerMiddlewares("after", middlewareClasses); // todo: register only for loaded controllers?
                    return [2 /*return*/];
            }
        });
    });
}
exports.createExecutor = createExecutor;
/**
 * Registers custom parameter decorator used in the controller actions.
 */
function createParamDecorator(options) {
    return function (object, method, index) {
        getMetadataArgsStorage().params.push({
            type: "custom-converter",
            object: object,
            method: method,
            index: index,
            parse: false,
            required: options.required,
            transform: options.value
        });
    };
}
exports.createParamDecorator = createParamDecorator;
//# sourceMappingURL=index.js.map
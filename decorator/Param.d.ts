import {ParamOptions} from "../decorator-options/ParamOptions";

/**
 * Injects a request's route parameter value to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
export declare function Param(name: string, options?: ParamOptions): Function;

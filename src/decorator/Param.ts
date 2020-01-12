import {ParamOptions} from "../decorator-options/ParamOptions";
import {getMetadataArgsStorage} from "../index";

/**
 * Injects a request's route parameter value to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
export function Param(name: string, options?: ParamOptions): Function {
    return function (object: Object, methodName: string, index: number) {
        getMetadataArgsStorage().params.push({
            type: "param",
            object: object,
            method: methodName,
            index: index,
            name: name,
            parse: false, // it does not make sense for Param to be parsed
            required: options ? options.required : undefined,
            classTransform: undefined
        });
    };
}
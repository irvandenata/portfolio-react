/* eslint-disable @typescript-eslint/no-explicit-any */

export function convertSnakeToCamel(obj: any):any {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => convertSnakeToCamel(item));
    }

    return Object.keys(obj).reduce((camelObj:any, key) => {
        const camelKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
        camelObj[camelKey] = convertSnakeToCamel(obj[key]);
        return camelObj;
    }, {});
}
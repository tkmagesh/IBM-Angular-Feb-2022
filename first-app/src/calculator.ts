export function add(x : number, y : number) : number {
    return x + y;
}

export function subtract(x : number, y : number) : number {
    return x - y;
}

//the above functions are assembled in a 'module' object and the module object is exported

//default export (ONLY ONE default export)

let utils = {
    isEven(n : number) : boolean {
        return n % 2 === 0;
    },
    isOdd(n : number) : boolean {
        return n % 2 !== 0;
    }
}

export default utils;
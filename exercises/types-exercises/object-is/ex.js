// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
    Object.is = function ObjectIs(param1, param2) {
        console.log('parameters: ', param1, param2);
        console.log('types: ', typeof param1, typeof param2);
        //console.log('parameters compared: ', param1 === param2);
    
        if (param1 === 0 || param2 === 0) {
            return 1 / param1 === 1 / param2; 
            /* 1 / -0 = -Infinity. This is the way we can differenciate 0 and -0 from each other without Object.is(val);*/
        }
        if (param1 !== param1 && param2 !== param2) {
            return true;
        }
        return param1 === param2;
    }
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);


console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
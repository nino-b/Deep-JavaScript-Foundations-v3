// TODO: write the validation functions
function isValidName(name) {
    if (typeof name !== 'string') return false;
    const regex = /^[a-zA-Z]$/;
    if (name.trim().length >= 3) {
        for (const char of name) {
            if (!regex.test(char)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function hoursAttended(attended, length) {
    if (typeof attended === 'string' && attended.trim() !== "") {
        attended = Number(attended);
    }
    if (typeof length === 'string' && length.trim() !== "") {
        length = Number(length);
    }
    
    if (typeof attended === 'number' && typeof length === 'number') {
        if (attended !== attended || length !== length) return false;
        if (attended < 0 || length < 0) return false;
        if (attended % 2 > 0 || length % 2 > 0) return false;
        if (attended > length) return false;
        return true
    }
    return false;
}



// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);

console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);

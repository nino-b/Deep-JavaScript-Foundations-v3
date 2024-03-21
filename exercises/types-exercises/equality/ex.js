// TODO: write `findAll(..)`
function findAll(el, arr) {
	const result = [];
	for (const arrEl of arr) {
		if (Object.is(arrEl, el)) {
			result.push(arrEl);
		} else if (arrEl == el) {
			if (Object.is(el, 0) || Object.is(el, "0")) {
				if (Object.is(arrEl, 0) || Object.is(arrEl, "0")) {
					result.push(arrEl);
				}
			} else if (Object.is(arrEl, -0)){
				if (Object.is(el, -0)) {
					result.push(arrEl);
				}
			} else if (!Object.is(arrEl, -0) && !Object.is(el, -0) && typeof arrEl !== 'boolean' && typeof el !== "boolean" && !Object.is(arrEl, "")  && !Object.is(el, "")) {
				result.push(arrEl);
			}

		}
	}
	console.log('result: ', result);
	return result;
} 

// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];


console.log('1',setsMatch(findAll(null,values),[null,undefined]) === true); //
console.log('2',setsMatch(findAll(undefined,values),[null,undefined]) === true); //
console.log('3',setsMatch(findAll(0,values),[0,"0"]) === true); //
console.log('4',setsMatch(findAll(-0,values),[-0]) === true);
console.log('5',setsMatch(findAll(13,values),[13]) === true); //
console.log('6',setsMatch(findAll(42,values),[42,"42"]) === true); //
console.log('7',setsMatch(findAll(NaN,values),[NaN]) === true);
console.log('8',setsMatch(findAll(-Infinity,values),[-Infinity]) === true); //
console.log('9',setsMatch(findAll(Infinity,values),[Infinity]) === true); //
console.log('10',setsMatch(findAll("",values),[""]) === true);
console.log('11',setsMatch(findAll("0",values),[0,"0"]) === true); //
console.log('12',setsMatch(findAll("42",values),[42,"42"]) === true); //
console.log('13',setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log('14',setsMatch(findAll("true",values),["true"]) === true);
console.log('15',setsMatch(findAll(true,values),[true]) === true);
console.log('16',setsMatch(findAll(false,values),[false]) === true);
console.log('17',setsMatch(findAll(myObj,values),[myObj]) === true);

console.log('18',setsMatch(findAll(null,values),[null,0]) === false);
console.log('19',setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log('20',setsMatch(findAll(0,values),[0,-0]) === false);
console.log('21',setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log('22',setsMatch(findAll(25,values),[25]) === false);
console.log('23',setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log('24',setsMatch(findAll("",values),["",0]) === false);
console.log('25',setsMatch(findAll("false",values),[false]) === false);
console.log('26',setsMatch(findAll(true,values),[true,"true"]) === false);
console.log('27',setsMatch(findAll(true,values),[true,1]) === false);
console.log('28',setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
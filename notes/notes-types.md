# Types

Type - a specific behavior that we expect from a value.

#### 'Everything is an object'

- Statement 'In JavaScript everything is an object' is false.
- Most values can behave as objects, but that does not make them objects. 


### Primitive Types
- undefined
- null
- bigint
- boolean
- number
- string
- symbol


### Object Types
- object
- array
- function


### Primitive Types
- <b>Undefined</b>: 
    - Undefined value. 
    - When a variable has not been assigned a value.
- <b>Null</b>: 
    - Intentionally empty or non-existent value.
- <b>Bigint</b>: 
    - Itegr with arbitrary precision. 
    - Can represent whole numbers larger than 2^53-1 (largest number that Number primitive type can represent accurately).
    - Size is limited only by system memory.
    - We can create BigInt by appending 'n' to the end of an integer or by calling 'BigInt()' function.
- <b>Boolean</b>: 
    - Logical entity. 
    - Has two values: true and false.
- <b>Number</b>: 
    - Numeric values - both integers and floating numbers.
- <b>String</b>: 
    - Sequence of characters used to store text.
- <b>Symbol</b>: 
    - Unique and immutable values. 
    - Used as identifiers for object properties. 
    - Used to create pseudo private keys on objects - those keys won't show up in a typical enumeration over object's properties (```for ... in``` or ```Object.keys()```).
    - Mostly used in frameworks.


#### typeof 
- In JS variables don't have types, values do.
- ```typeof``` operator asks what is the type of the value that is in the variable (e.g. ```let i = 1;``` what is the type of the value that is stored in the variable ```i```).
- Always returns a string that tells us what we can expect to do with that value of a particular type.
- ```typeof null = 'object'``` - this is a hystorical error.
- When we do ```typeof``` check and it returns an ```object``` we need to make sure that it is not accidentally the ```null```.
- ```typeof function = 'function'```
- ```typeof array = 'object'```. To specify if object is actually an array, we can use ```Array.isArray()``` method.
- ```typeof bigint = 'bigint'```.


#### Undefined
- Having 'undefined' type does not mean that element does not have a value.
- More appropriate way will be - does not <i>currently</i> have a value. Because it is possible that variable had a value, then it went to the state of not having a value.


#### Undefined vs Undeclared vs TDZ: 

- Undefined: It has been initialized but it is undefined. There is definitely a variable and at this moment it has no value.
- Undeclared: Variable that was never even created. It has never been created in the scope that we have access. In this case ```typeof``` will return ```'undefined'```.
- TDZ - Uninitialized - Temporal Dead Zone: It has never been initialized. Certain variables (like block scope) don't get initialized, they don't get set to undefined. And we can't manipulate with them.


### NaN
- Not a valid number.
- A return value of a  numeric operation that is not type of number - ```NaN```. 
- 0 is not a placeholder for absence of a numeric value. It is not a substitute for ```NaN```.
- If there is a ```NaN``` somewhere in our mathematical equation, the result will be ```NaN```.
- ```NaN ≠≠≠ NaN``` - ```NaN``` does not equal to itself.
- ```isNaN(val)``` - old version of checking whether some value is ```NaN``` or not. The problem with it is that it coerces values to numbers before checks for them to be ```NaN```.
- ```Number.isNaN(val)``` - new version of checking whether a value is ```NaN``` or not without value coercion. 
- ```typeof NaN = 'number'``` - Type of invalid number - ```NaN``` is a ```'number'```.


### -0 Negative Zero
- ```-0 === 0```.
- ```let i = -0; i.toString() // 0``` - when we turn negative zero to a string, it is 0 (no negative sign).
- ```Object.is(i, -0); // true```.
- ```Object.is(i, 0); // false```.
- ```Math.sign(i);``` will return -0 instead of -1.
- Custom function that determines sign of a number:
``` js
function sign(n) {
    return n !== 0 ? Math.sign(n) : Object.is(n, -0) ? -1 : 1;
}
```
- -0 Negative Zero might be useful if you want to show directions whether something is moving left or right or something like that.




### Fundamental Objects / Native Object / Built-In Objects

#### Use as constructors (create new instances)

- new Object()
- new Array()
- new Function()
- new Date()
- new RexExp()
- new Error()

#### Recommended not to use as constructors. Only as functions (to coerce its value to a respective primitive type), (although new String(), new Number() and new Boolean() are also possible)

- String()
- Number()
- Boolean()
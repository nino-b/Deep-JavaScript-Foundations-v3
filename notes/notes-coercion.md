### Abstract Operation

- ToPrimitive(hint);
- Performs task of type conversion (aka 'coercion').
- Abstract operations are not directly callable. They are used internally in JS engine.
- Abstract operation is defined as series of steps, like an algorithm, that describes how to achieve a partiular outcome from given inputs.

#### Abstract Operation Examples:
- ```ToPrimitive (input, [PreferredType])```: converts an object to a corresponding primitive value. if ```PreferredType``` is specified, it attempts to convert to that specific type.
    - It can convert into ether a string or a number:
        - ```toString()``` converts into a string.
        - ```valueOf()``` converts into a number.
    - How does it work:
    - ```ToPrimitive (input, ['string'])```-> calls ```toString()``` (object might have defined custom ```toString()``` method on it / ```Object.prototype.toString()``` (if object doesn't have ```toString()``` on it), which returnd the string in the format ```"[object StringTag]"``` (usually looks like this: ```"[object Object]"```)) -> ether returns converted value / or if ```toString()``` was not available, it will call ```valueOf()``` method -> it will return converted value or a ```TypeError```.
    - ```valueOf()``` works the same way.
- ToString(value) - any value (primitive or an object) can be converted to a string.
- ToNumber(value) - converts non-numeric values to numbers (e.g. in math operations).
- ToObject(value) - converts primitive value to its correspondin wrapper object.
- Get(O, P) - retrieves value of the property P from object O.
- Set (O, P, V, throw) - creates new data property P on object O with value V. It will throw an error if we try to assign to the read-only properties.
- ...


#### ToString()

- Takes any value and gives us a representation of that value in string form.
- ```-0``` string representation is ```0```.
- If we call ```ToString(object)``` it is going to call ```ToPrimitive(string)``` with hint of string and ```ToPrimitive(string)``` will call ```toString()``` and if it is unsuccessful, then ```valueOf()``` and if still unsuccessful - then it results in a ```TypeError```.
- 
```js
     null  -  "null"
undefined  -  "undefined"
     true  -  "true"
    false  -  "false"
  3.14159  -  "3.14159"
        0  -  "0"
       -0  -  "0"
```
- <b>Array:</b>
    -        
     ```js
                   []  -  ""
              [1,2,3]  -  "1, 2, 3"
    [null, undefined]  -  ","
         [[], [], []]  -  ",,,"
               [,,,,]  -  ",,,"
    ```
 Arrays have a default ```toString()``` which serializes the representation of the array.
- <b>Object:</b>
    ```js
                           {}  -  "[object Object]"
                        {a:2}  -  "[object Object]"
    {toString(){return "X";}}  -  "X"
    ```
    - ```{}``` and ```{a: 2}``` do not have a custom ```toString()``` method, so calling ```ToString``` on these objects falls back to ```Object.prototype.toString()```, resulting in ```"[object Object]"```.
    - ```{toString(){return "X";}}``` defines a custom ```toString()``` method that returns a primitive value ("X"), so ToString directly uses this value, "X".
    - ```"[object Object]"``` - ```Object``` is called the 'stringTag'. We can override this string tag for any of our custom objects using Symbol.
    - Overriding the StringTag:
        ```js
        class CustomClass {
            get [Symbol.toStringTag]() {
                 return "Custom";
                }
        }
        console.log(Object.prototype.toString.call(new CustomClass())); // "[object Custom]"
        ```




#### ToNumber

- If we need to do something numeric and we don't have a number, we use ```toNumber()```.
- 
```js
        ""  -  0
       "0"  -  0
      "-0"  -  -0
   " 009 "  -  9
 "3.14159"  -  3.14159
      "0."  -  0
      ".0"  -  0
       "."  -  NaN
    "0xaf"  -  175
```
- 
```js
     false  -  0
      true  -  1
      null  -  0
 undefined  -  NaN 
```
- For any array or object input, ```valueOf()``` returns itself. Which has an effect of ignoring ```valueOf``` and just deferring to ```toString()```. So if we want 'numberification' of an object / array, we are actually stringifying them.
- When we use ```ToNumber(object)``` -> it calls ```ToPrimitive(number)``` -> that calls ```valueOf()``` -> ```toString()``` -> returns stringified value.
- 
```js
       [""]  -  0
      ["0"]  -  0
     ["-0"]  -  -0
     [null]  -  0
[undefined]  -  0
  [1, 2, 3]  -  NaN
     [[[]]]  -  0
```
(null and undefined first become empty strings and then they are converted to 0).
- 
```js
                   {..}  -  NaN
(valueOf() {return 3;})  -  3
```
(Object's string representation is "[object Object]" which is not a valid number (NaN)).


#### ToBoolean

- Falsy values - values that if coerced to boolean, will return false. Everything else of this chart is truthy values.
```js
       ""  -  false
        0  -  false
       -0  -  false
     null  -  false
      NaN  -  false
    false  -  false
undefined  -  false
```
- Truthy values - values that if coerced to boolean, will return true. Examples of truthy values:
```js
       "foo"  -  true
          23  -  true
       {a:1}  -  true
      [1, 3]  -  true
          []  -  true
        true  -  true
function(){}  -  true
```


### Coercion

- If we use plus (+) operator with and even one of the values is a string, plus (+) operator acts as string concatenator (and not as mathematical sign).

#### Explicit coercion examples:
- ```[Numeric Value].join("")``` if we use ```join()``` method on the array with even only one value, it will stringify it.
- ```String(Non String Value)```. 
- ```NonStringValue.toString()```.
- ```Number(String Value)```.

#### Implicit coercion examples:
- Template Literals example (number is converted to a string):
```js
const num = 16;
console.log(`Implicitly stringified number - ${num}`);
```
- plus (+) sign converting number to a string:
```js
const num = 16;
console.log('Implicitly stringified number - ' + num)
```
- plus (+) sign to convert string to a number (useful with form inputs (because form inputs have string types)):
```js
console.log('Implicitly coerced number - ', +'16')
```
- minus (-) sign to convert string into a negative number:
```js
console.log(-'16'); // -16
console.log(-'-16'); // 16
```
- comparsion operators(<>=) turn string into number if one of the values is a number:
```js
const stringNum = '16',
const actualNum = 10;

console.log(stringNum > actualNum);   // true
```

#### Changing Bad Habits

- Instead of: ```if (someVariable.value) {}```
write: ```if (!!someVariable.value) {}```. We explicitly say that this exoression is explicitly boolean (same as saying ```Boolean(someVariable.value)```).
- Instead of: ```while (someVariable.length) {}```
write: ```if (someVariable.length > 0) {}```.
- Practical Example: We can use boolean explicit coercion to find out whether array or an object has been defined (returns true).
```js
Boolean(undefined);   // false
Boolean(null);        // false
Boolean({});          // false
```


#### Boxing

- Boxing is a form of implicit coercion.
- When we are trying to use a non object value as an object, JS implicitly temporarly converts it into an object.


#### Corner Cases
```js

Number( "" );                         // 0
Number( " \t\n" );                    // 0
Number( null );                       // 0
Number( undefined );                  // NaN
Number( [] );                         // 0
Number( [1,2,3] );                    // NaN
Number( [null] );                     // 0
Number( [undefined] );                // 0
Number( {} );                         // NaN

String( -0 );                         // "0"
String( null );                       // "null"
String( undefined );                  // "undefined"
String( [null] );                     // ""
String( [undefined] );                // ""

Boolean(new Boolean(false));          // true
```

- Any space that is full of whitespace, becomes 0.

```js
Number(true);                          // 1
Number(false)                          // 0
```
- Don't compare three numbers to each other at the same time:
```js
3 > 2 > 1                               // false
```
This is what happens:
- ```3 > 2``` = true. true = 1.
- ```true > 1``` = false.
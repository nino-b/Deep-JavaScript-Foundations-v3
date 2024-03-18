### Equality == vs ===

#### Double Equals ==

- Checks both type and value!
- Allows coercion when the types are different.
- Never use == when we don't know types!!
- It is common saying: ' Double equals checks value and triple equals checks value and type'. In reality, both check type and value. Difference is that if values are different Double Equals coerces one value and Triple Equals stops evaluation.
- Double Equals prefers numeric comparison. If one value is nueric type and another one is not, it calls ```ToNumber``` on non-numeric value and then performs comparison.
- == only compares primitives. If one of the values is not primitive type, == calls ```ToPrimitive``` on that object. And if the first 'try' of converting to primitive value doesn't result in same types for both values, ```ToPrimitive``` is going to run recursively, until both types match. And if they never have same type, result will be false.
- If both values are non-primitive, it does check without coercion.
- ```null == undefined``` - true.
- ```element == !element``` - element compated to <i>negation of itself</i>. If element is <i>coercively equal to negation of itself</i>.
- ```element != element``` - checking if these two elements <i>are not the same element</i>. If element is <i>not coercively equal to itself</i>.

#### Avoid == in this cases:

- With 0 / "" / "  ".
- With non-primitives.
- ==true / ==false (instead use ```ToBoolean``` or ===).



#### Triple Equals ===

- Checks both type and value!
- Disallows coercion when types are different.
- Strict equality comparsions (problematic):
    - If any of the values is NaN, === returns false.
    - If both values have same Number values, returns true.
    - If one value is +0 and another one is -0, returns true (this problem exists because -0 is equal to +0). 
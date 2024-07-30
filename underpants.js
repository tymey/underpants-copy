// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) ==> 5
*   _.identity({a: "b"}) ==> {a: "b"}
*/

/**
 * I: The function receives a value.
 * O: The function returns the input value unchanged.
 * C: N/A
 * E: N/A
 */

_.identity = function(value) {
    // Return value unchanged
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

/**
 * I: The function receives a value.
 * O: The function returns the input value's data type as a string.
 * C: N/A
 * E: N/A
 */

_.typeOf = function(value) {
    // Must check for an array first since the unary operator typeof returns 'object' for Arrays
    // Check if value is an array datatype
    if (Array.isArray(value)) {
        // If true, return 'array'
        return 'array';
    // Check else if value is the null datatype since typeof returns 'object' for the null data type
    // Check if value is strictly equal to null
    } else if (value === null) {
        // If true, return 'null'
        return 'null';
    // Now the unary typeof operator will properly yield the correct string for each data type
    // Else, return typeof value
    } else {
        return typeof value;
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

/**
 * I: The function receives as array and a number.
 * O: The fucntion returns [] if the input array isn't an array. The function
 *    returns the first element of the inupt array if the input number isn't given
 *    or isn't a numbers. Otherwise, the function returns the first input number 
 *    items of the input array.
 * C: N/A
 * E: What if the input number is negative? 
 *      - Return [] since a negative number is less than 1.
 *    What if the input number is greater than the input array's length?
 *      - Return the entire array since the number of elements is less than the input number.
 */

_.first = function(arr, num) {
    // Initialize output variable with an empty array
    let output = [];
    /* Check if any of the following are true: 
        - Not an array (_.typeOf(arr) !== 'array')
        - num is less than 1 (num < 1) AND is an array (_.typeOf(arr) === 'array') */
    if (_.typeOf(arr) !== 'array' || (_.typeOf(arr) === 'array' && num < 1)) {
        // If either are true, return output
        return output;
    /* Check else if any of the following is true: 
        - num === 1 
        - num === undefined */
    } else if (num === 1 || num === undefined) {
        // If true, return the first element of arr
        return arr[0];
    // Check else if num > arr.length (num greater than length edge case)
    } else if (num > arr.length) {
        // If true, return the input array
        return arr;
    // Else, build output array with th first num elements of arr
    } else {
        // Iterate through the first num elements of arr
        // Declare for loop using i; Start: 0; Stop: num; Increment by 1 each loop
        for (let i = 0; i < num; i++) {
            // Push arr[i] into output array to build out the first num elements
            output.push(arr[i]);
        }
        // Once loop is done, return the output array
        return output;
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

/**
 * I: The function receives as array and a number.
 * O: The fucntion returns [] if the input array isn't an array. The function
 *    returns the first element of the inupt array if the input number isn't given
 *    or isn't a numbers. Otherwise, the function returns the last input number 
 *    items of the input array.
 * C: N/A
 * E: What if the input number is negative? 
 *      - Return [] since a negative number is less than 1.
 *    What if the input number is greater than the input array's length?
 *      - Return the entire array since the number of elements is less than the input number.
 */

_.last = function(arr, num) {
    /* Check if any of the following are true: 
        - Not an array (_.typeOf(arr) !== 'array')
        - num is less than 1 (num < 1) AND is an array (_.typeOf(arr) === 'array') */
    if (_.typeOf(arr) !== 'array' || (_.typeOf(arr) === 'array' && num < 1)) {
        // If either are true, return output
        return [];
    } else if (num === 1 || num === undefined || _.typeOf(num) !== 'number') {
        // If true, return the last element of arr
        return arr[arr.length - 1];
    // Check else if num > arr.length (num greater than length edge case)
    } else if (num > arr.length) {
        // If true, return the input array
        return arr;
    // Else, return a slice of arr starting with num - 1 (the index of the num element)
    } else {
        return arr.slice(-1 * num); 
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

/**
 * I: The function receives an array and a value.
 * O: The function returns the index of <array> that is the first occuance of <value>.
 * C: Do not use the native .indexOf() function.
 * E: What if <array> has multiple occurances of <value>?
 *      - The function should only return the lower numbered index.
 *    What if <value> isn't in <array>?
 *      - Return -1.
 */

_.indexOf = function(arr, val) {
    // Iterate through arr starting at index-0
    // Declare for loop using i; Start: 0; Stop: arr.length; Increment by 1 each loop
    for (let i = 0; i < arr.length; i++) {
        // Check if arr[i] is strictly equal to val
        if (arr[i] === val) {
            // Return i
            return i;
        }
    }
    // If no match is found, return -1
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

/**
 * I: The function receives an array and a value.
 * O: The function returns true if <array> contains <value>; otherwise, return false.
 * C: Must use the ternary operator.
 * E: What if no <value> is given?
 */

_.contains = function(arr, val) {
    // Iterate through arr
    // Declare for loop using i; Start: 0; Stop: arr.length; Increment by 1 each loop
    for (let i = 0; i < arr.length; i++) {
        // Check if arr[i] is strictly equal to val
        if (arr[i] === val) {
            // If true, return true
            return true;
        }
    }
    // If there is match after loop, return false.
    return false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

/**
 * I: The function receives an array and a function that passes the arguments: the element
 *    in the input array, its index, and the input array itself.
 * O: The function returns a new array of elements for which the calling input function returned true.
 * C: N/A
 * E: N/A
 */

_.filter = function(array, func) {
    // Initialize ouput variable with an empty array
    let output = [];
    // Loop through array
    // Declare for loop using i; Start: 0; Stop: array.length; Increment by 1 each loop
    for (let i = 0; i < array.length; i++) {
        // Check if the input function func returns true after passing array[i] through it
        if (func(array[i], i, array)) {
            // If true, push array[i] into output array
            output.push(array[i]);
        }
    }
    // After the calling function func has been invoked with each element of array,
    // return the output array
    return output;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
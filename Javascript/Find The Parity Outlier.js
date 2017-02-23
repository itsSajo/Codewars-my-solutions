// PROBLEM //


/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160 */


// SOLUTION //


// this function which will return array of odd and even 
function findOutlier(integers){
  
  //dummies
  var odd = [];
  var even = [];
  
  // forEach is a method on Array.prototype, which takes a callback function with one argument 
  // On every element of array forEach will call this function and push current element to proper array.
  integers.forEach(function(integer) {
 
    if(integer % 2 === 0) {
      even.push(integer)
    } else {
      odd.push(integer)
    }
  });
  
  // We need to find that array with one element only.
  if(even.length === 1) {
    return even[0];
  } else {
    return odd[0];
  }
};
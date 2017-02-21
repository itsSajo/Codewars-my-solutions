// QUESTION //


/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160 */


// SOLUTION //

function findOutlier(integers, n){
  
  var odd = [];
  var even = [];
  
  integers.forEach(function(integer) {
  
    if(integer % 2 === 0) {
      even.push(integer)
    } else {
      odd.push(integer)
    }
  });
  
  if(even.length === 1) {
    return even[0];
  } else {
    return odd[0];
  }
};
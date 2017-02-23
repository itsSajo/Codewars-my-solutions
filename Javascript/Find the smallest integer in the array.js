// PROBLEM //

/*Find the smallest integer in the array.

Given an array of integers your solution should find the smallest integer. For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345*/

// SOLUTION //

class SmallestIntegerFinder {
  findSmallestInt(args) {
	  
	// initial start point
    var smallest = null;
    args.forEach(arg => {
		
		// the first element from array will be passed to smallest becasue of first statement in ||
		// when loopin through second element first statement in || will be false (it has already a value) so second will be checked
		// second statement is used with ternary operator (similar to if) - when true will return smallest = arg, if not smallest;
		smallest == null || arg < smallest ? smallest = arg : smallest;
    })
    return smallest;
  }
}
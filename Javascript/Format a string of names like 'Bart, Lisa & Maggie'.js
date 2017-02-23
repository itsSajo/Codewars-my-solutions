// PROBLEM //

/*Description:

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.*/

// SOLUTION //

function list(names){
	// Best shot with array-type objects or arrays in general are fully implemented modern methods on Array object;
	// Someone said that if forEach, sort, reject or filter fail you should use reduce
	
	// so reduce takes callback function with up to 4 arguments 
	var format = names.reduce(function(prev, current, index, array){
		// this is a must, because we must return first value, so we can have a reference to this value in prev argument 
		if(index === 0) {
		  return current.name;
		  // after first loop prev isnt undefined, so using simple logic to get proper char in string 
		  // see reduce on MDN on how iteration works
		} else if(index === array.length - 1) {
		  return  prev + " & " + current.name;
		} else {
		  return prev + ", " + current.name;
		}
		// starting point - object with empty string 
	  }, '')
	// it will return string or empty string 	
	return format;
}
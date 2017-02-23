// PROBLEM //

/*Your objective is to complete a recursive function reverse() that receives str as String and returns the same string in reverse order*/


// SOLUTION //

function reverse(str) {
	// recursion is a function that call itself repeatedly
	// below this function I show the process of iterations through recursion on this example
    return str.length > 1 ? reverse(str.slice(1)) + str[0] : str;
}

reverse("word");

// "word" 
// reverse("ord") + "w"
// (reverse("rd") + "o") + "w"
//	((reverse("d") + "r") + "o" )+ "w"
//	((("d") + "r") + "o") + "w"
//	"drow"
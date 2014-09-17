//a prime number is only divisible by itself and 1
function isPrime(n) {
	var divisor = 2;

	while (n > divisor){
		if(n % divisor == 0) {
			return false;
		} else ++divisor;
	}
	return true;
}

//console.log(isPrime(137)); //expect true
//console.log(isPrime(237)); //expect false;

//Question: How could you find all prime factors of a number?
//Answer: Run a while loop. start dividing by two and if not divisible increase divider until u r done.
// run time complexity is O(n)
function primeFactors(n) {
	var factors = [],
		divisor = 2;

		while(n>2){
			if (n % divisor == 0){
				factors.push(divisor);
				n=n/ divisor;
			} else {
				++divisor;
			}
		}
		return factors;
}

//console.log(primeFactors(69)); //expect [3,23]

//Question: How do get nth Fibonacci number?
//Answer: I create an array and start from iterate through.
//Fibonacci series is one of the most popular interview question for beginners. so, you have to learn this one.
// run time complexit is O(n)
function fibonacci(n) {
	var fibo = [0,1];

	if (n <= 2) return 1;

	for (var i=2; i<=n; ++i){
		fibo[i] = fibo[i-1]+fibo[i-2];
	}
	return fibo[n];
}

//console.log(fibonacci(12)) //expect 144

// run time complexity O(2n)
function fibonacciRec(n){
	if(n<=1)
		return n;
	else
		return fibonacciRec(n-1) + fibonacciRec(n-2);
}

//console.log(fibonacciRec(12)); //expect 144

function greatestCommonDivisor(a,b) {
	var divisor = 2,
		greatestDivisor = 1;

	//if u pass a -ve number this will not work
	if (a < 2 || b < 2)
		return 1;

	while(a >= divisor && b >= divisor){
		if(a % divisor == 0 && b % divisor == 0){
			greatestDivisor = divisor;
		}
		++divisor;
	}
	return greatestDivisor;
}

function greatestCommonDivisorRec(a,b) {
	if(b == 0)
		return a
	else
		return greatestCommonDivisor(b,a%b);
}

//console.log(greatestCommonDivisorRec(14,21)); //expect 7
//console.log(greatestCommonDivisorRec(69,169)); //expect 1


//Question: How would you remove duplicate members from an array?
//Answer: will start a while looping and keep an object/ associated array. 
//If i find an element for the first time i will set its value as true (that will tell me element added once.). 
//if i find a element in the exists object, i will not insert it into the return array.
function removeDuplicate(arr){
	var exists = {},
		outArr = [],
		elm;

	for(var i=0;i<arr.length;++i){
		elm=arr[i];
		if(!exists[elm]){
			outArr.push(elm);
			exists[elm] = true;
		}
	}
	return outArr;
}

//console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));

//Question: How would you merge two sorted array?
//Answer: I will keep a pointer for each array and 
//(read the code. and be careful about this one.)
function mergeSortedArray(a,b){
	var merged = [],
	aElm = a[0],
	bElm = b[0],
	i = 1,
	j = 1;

	if(a.length ==0)
		return b;
	if(b.length ==0)
		return a;

	/*
	if aElm or bElm exists we will insert to merged array
	(will go inside while loop)
	to insert: aElm exists and bElm doesn't exist
	or both exists and aElm < bElm
	this is the critical part of the example
	*/
	while(aElm || bElm){
		if((aElm && !bElm) || aElm < bElm){
			merged.push(aElm);
			aElm = a[++i]; 
		} else {
			merged.push(bElm);
			bElm = b[++j];
		}
	}
	return merged;
}

//console.log(mergeSortedArray([2,5,6,9],[1,2,3,29]));

function mergeSortedArrays(a,b,c){
	var merged = arguments[0].concat(b,c);
	//return merged.sort(function(a,b) { return a - b; });
	return shellSort()(merged);
}

//console.log(mergeSortedArrays([2,5,6,9],[1,2,3,29],[9,10,55,46,80]));
var shellSort = function () {

	var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

	function compare(a, b) {
	    return a - b;
	  }

	/**
	 * Shellsort which uses the gaps in the lexical scope of the IIFE.
	 *
	 * @public
	 * @param {array} array Array which should be sorted
	 * @return {array} Sorted array
	 */
	return function (array, cmp) {
	  cmp = cmp || compare;

	  var gap, current;
	  for (var k = 0; k < gaps.length; k += 1) {
	    gap = gaps[k];
	    for (var i = gap; i < array.length; i += gap) {
	      current = array[i];
	      for (var j = i;
	          j >= gap && cmp(array[j - gap], current) > 0; j -= gap) {
	        array[j] = array[j - gap];
	      }
	      array[j] = current;
	    }
	  }
	  return array;
	};

};

console.log(mergeSortedArrays([2,5,6,9],[1,2,3,29],[9,10,55,46,80]));

//Question: How would you swap two numbers without using a temporary variable?
//Answer: Waste time about thinking it. 
//though u know the answer, 
//act like you are thinking and take your time to answer 
//this one.
function swapNum(a,b){
	console.log('before swap: ',' a:',a,' b:',b);
	b = b -a;
	a = a+b;
	b = a-b;
	console.log('after swap: ', ' a:',a,' b:',b);
	/*
	console.log("a: " + a + " and b: " + b);
	a = a ^ b;
	b = a ^ b;
	a = a ^ b;
	console.log("a: " + a + " and b: " + b);
	*/
}

//swapNum(2,3);

//Question: How would you reverse a string in JavaScript?
//Answer: I can loop through the string and concatenate l
//etters to a new string
function reverse(str) {
	var rtnStr = '';
	for(var i = str.length-1; i>=0;--i){
		rtnStr +=str[i];
	}
	return rtnStr;
}

//console.log(reverse('testing reverse string'));

//Interviewer: You know concatenation performed well in modern browsers but becomes slow in older browsers like IE8. Is there any different way, you can reverse a string?
//Answer: sure. i can use an array and also add some checking. if string is null or other than string this will fail. let me do some type check as well. Using this array is like using string buffer in some server side languages.
// run time complexit O(n)
function reverse2(str) {
	var rtnStr = [];
	if (!str || typeof str != 'string' || str.length < 2) return str;

	for(var i=str.length-1; i>=0;--i){
		rtnStr.push(str[i]);
	}
	return rtnStr.join('');
}

function reverseRec(str) {
	if(str === "") {
		return str;
	} else {
		return reverse(str.substr(1) + str.charAt(0));
	}
}

//console.log(reverseRec("testing reverse recursive"));

//use built in function
function reverse3(s){
    return s.split("").reverse().join("");
}

//console.log(reverse3("testing reverse 3"));

function sortInts(arr) {
	return arr.sort(function(a,b) { return a-b; })
}

//console.log(sortInts([0,6,5,8,3,45,7,4]));
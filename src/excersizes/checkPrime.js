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

//Question: How do get nth Fibonacci number?
//Answer: I create an array and start from iterate through.
//Fibonacci series is one of the most popular interview question for beginners. so, you have to learn this one.
function fibonacci(n) {
	var fibo = [0,1];

	if (n <= 2) return 1;

	for (var i =2; i<=n; ++i){
		fibo[i] = fibo[i-1]+fibo[i-2];
	}
	return fibo[n];
}

//console.log(isPrime(137)); //expect true
//console.log(isPrime(237)); //expect false;

//console.log(primeFactors(69)); //expect [3,23]

console.log(fibonacci(12)) //expect 144
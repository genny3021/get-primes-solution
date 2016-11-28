module.exports = {
	
 getPrimes: function(n){
	var sieve = [];
	var array_results = [];
	var i = 0;
	var p = 0;
	var maxcount = n;
	var maxsieve = n;
	var sqroot = Math.sqrt(n);
	var prime = 0;
	var count = 0;
	
	
	if (n <= 0){ //if input is not a number
		return "Invalid input received";
		
	}else if (n == 1){
		return "Primes of 1 cannot be found based on definition of a prime number";
	}
	else if (typeof n != 'number' || !n){ //if input is not a number
		return "Only integer values allowed";		
	}

// Build a sequence of numbers from 2 to n. According to Sieve of Eratosthenes
for (i = 2; i <= maxsieve; i++)
{
    sieve[i] = 1;
}

// Use the Sieve to find primes and count them as they are found.
for (prime = 2; prime <= sqroot && count < maxcount; prime++)
{
    if (sieve[prime] == 1)
    {
        count += 1;
        for (i = prime * 2; i <= maxsieve; i += prime)
        {
            sieve[i] = 0;
        }
    }
}
for (var b=1; b < sieve.length; b++){ //loop through the number sequence from 2 to n
	
		if (sieve[b] == 1){			
				array_results.push(b);
		}
	}
	
	return array_results;

}
}

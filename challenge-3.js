
function isPrime(num) {//this is because prime numbers are greater than 1
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {//to see if the conditions is met
        if (num % i === 0) {
            return false;
        }
    }
    return true; // Return true if none of the conditions are met
}

function getPrimeNumbers(num1, num2) {
    let primeNumbers = [];
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) { // to seee if the  nuumber is a prime number
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

console.log(getPrimeNumbers(1,20 )); // output

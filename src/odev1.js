console.log("-- FIND PRIMES --")
function findprime(...values) {
    let primes = []
    let nonprimes = []
    let count1 = 0;
    let count2 = 0;
    if (values.length > 0) {
        for (let i = 0; i < values.length; i++) {
            if (values[i] % 2 != 0) {
                primes[count1] = values[i]
                count1++;
            }
            else {
                nonprimes[count2] = values[i]
                count2++;
            }
        }
        console.log("Primes : ")
        console.log(...primes)
        console.log("Not Primes : ")
        console.log(...nonprimes)
    }
    else {
        console.log("Please enter a valid number.")
    }

}
findprime(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 151)
console.log(" ")
console.log("-- FIND FRIENDLY NUMBER --")
function friendlynumber(number1, number2) {
    let total1 = 0
    let total2 = 0
    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            total1 += i
        }
    }
    for (let i = 0; i < number2; i++) {
        if (number2 % i == 0) {
            total2 += i
        }
    }
    if (total1 == number2 && total2 == number1) {
        console.log(number1 + " and " + number2 + " are friends.")
    }
    else {
        console.log(number1 + " and " + number2 + " are not friends.")
    }
}
friendlynumber(220, 228)


let total3 = 0
let perfectNumbers = ""
let primeNumbers = ""
for (let j = 0; j <= 1000; j++) {

    for (let i = 0; i <= j; i++) {
        if (j % i == 0) {
            total3 += i
        }
    }
    if (total3 == (j * 2)) {
        perfectNumbers += " " + j
    }
    total3 = 0
    if (j % 2 != 0) {
        primeNumbers += " " + j
    }
}
console.log(" ")
console.log("-- FIND PERFECT NUMBERS 0-1000 --")
console.log("PERFECT NUMBERS : " + perfectNumbers)
console.log(" ")
console.log("-- FIND PRIME NUMBERS 0-1000 --")
console.log("PRIME NUMBERS : " + primeNumbers)
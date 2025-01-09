
const primes = []; 
let n = 2; 


while (primes.length < 10) { 
    let isPrime=true;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        primes.push(n)
    }
 
    n++; 
}





console.log(primes);

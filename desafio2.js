function isFibonacci(n) {
  if (n === 0 || n === 1) return true;
  
  let a = 0, b = 1;
  
  while (b < n) {
      [a, b] = [b, a + b];
  }
  
  return b === n;
}

function checkFibonacciMembership(number) {
  if (isFibonacci(number)) {
      console.log(`${number} pertence à sequência de Fibonacci!`);
  } else {
      console.log(`${number} não pertence à sequência de Fibonacci.`);
  }
}

checkFibonacciMembership(8);
checkFibonacciMembership(10); 
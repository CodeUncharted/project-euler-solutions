function fiboEvenSum(n) {
   let a = 0, b = 1, sum = 0;
  
  while (b <= n) {
    if (b % 2 === 0) {
      sum += b;
    }
    
    let temp = b;
    b = a + b;
    a = temp;
  }
  
  return sum; 
}
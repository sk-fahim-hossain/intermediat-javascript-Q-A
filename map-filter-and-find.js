const number =[ 12,3,56,6,4,36,8];
const result = number.map(x => x * x);
console.log(result);
const result2 = result.filter(x => x>100);
console.log(result2);
const result3 = result2.find(x => x%12);
console.log(result3,'this is not divided by 12');
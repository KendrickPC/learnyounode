const addingSum = (arr) => {
  let sum = 0;
  for (var i=2; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
}

console.log(addingSum(process.argv));

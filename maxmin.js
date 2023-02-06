const arr = [100, -100];

if (arr.length === 0) {
  console.log("Empty arr");
  //return 0;
} else {
  let final = find(arr);
  console.log("The min and max are: " + final);
}
function find(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < min) {
      min = arr[j];
    }
  }
  const maxmin = [];
  maxmin.push(min, max);
  return maxmin;
}

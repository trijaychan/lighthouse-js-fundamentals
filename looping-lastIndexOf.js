function lastIndexOf(arr, num) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      index = i;
    }
  }
  
  if (index != -1)
    return index;
  else
    return -1
}

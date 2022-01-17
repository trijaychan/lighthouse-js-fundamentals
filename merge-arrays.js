function merge(arr1, arr2) {
  let j = 0;
  for (let i = 0; i < arr2.length; i++) {
    j = 0;

    while (arr1[j] < arr2[i]){
      j++;
    }
    
    arr1.splice(j, 0, arr2[i]);
  }

  return arr1;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
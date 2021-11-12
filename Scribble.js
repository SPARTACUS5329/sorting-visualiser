function merge(array1, array2) {
  let array3 = [];

  while (array1.length && array2.length) {
    // yield;
    if (array1[0].val > array2[0].val) {
      array3.push(array2[0]);
      array2.splice(0, 1);
    } else {
      array3.push(array1[0]);
      array1.splice(0, 1);
    }
  }

  while (array1.length) {
    // yield;
    array3.push(array1[0]);
    array1.splice(0, 1);
  }

  while (array2.length) {
    // yield;
    array3.push(array2[0]);
    array2.splice(0, 1);
  }
  return array3;
}

let arr1 = [3, 2];
let arr2 = [4, 5];

let res = merge(arr1, arr2);
console.log(res);

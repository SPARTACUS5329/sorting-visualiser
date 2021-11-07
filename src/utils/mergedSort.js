import changeColor from "./changeColor";

const DELAY = 1;

const delay = (DELAY) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, DELAY);
  });
};

async function merge(array1, array2) {
  let array3 = [];

  while (array1.length && array2.length) {
    changeColor(array1[0]);
    changeColor(array2[0]);
    await delay(DELAY);
    changeColor(array1[0]);
    changeColor(array2[0]);
    if (array1[0].val > array2[0].val) {
      array3.push(array2[0]);
      array2.splice(0, 1);
    } else {
      array3.push(array1[0]);
      array1.splice(0, 1);
    }
  }

  while (array1.length) {
    changeColor(array1[0]);
    await delay(DELAY);
    changeColor(array1[0]);
    array3.push(array1[0]);
    array1.splice(0, 1);
  }

  while (array2.length) {
    changeColor(array2[0]);
    await delay(DELAY);
    changeColor(array2[0]);
    array3.push(array2[0]);
    array2.splice(0, 1);
  }

  return array3;
}

async function mergeSort(arr, setArr, mainArray) {
  let n = arr.length;
  if (n === 1) {
    return arr;
  }

  let leftArray = arr.slice(0, Math.floor(n / 2));
  let rightArray = arr.slice(Math.floor(n / 2), n);

  leftArray = await mergeSort(leftArray, setArr, mainArray);
  rightArray = await mergeSort(rightArray, setArr, mainArray);

  let mergeResultArray = await merge(leftArray, rightArray);
  let l = mergeResultArray.length;
  let tempArr = [...mergeResultArray];
  let copyArr = [...mainArray];
  let subArr = copyArr.slice(l, mainArray.length);
  tempArr.push(...subArr);
  tempArr = [];
  await delay(DELAY);
  setArr(JSON.parse(JSON.stringify(tempArr)));
  await delay(DELAY);
  // setArr(tempArr);

  return mergeResultArray;
}

export default mergeSort;

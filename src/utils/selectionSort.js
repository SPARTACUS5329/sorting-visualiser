import changeColor from "./changeColor";
import delay from "./delay";

const DELAY = 1;

async function selectionSort(arr, setArr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let jMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      changeColor(arr[jMin]);
      changeColor(arr[j]);
      await delay(DELAY);
      changeColor(arr[jMin]);
      changeColor(arr[j]);
      if (arr[j].val < arr[jMin].val) {
        jMin = j;
      }
    }

    if (jMin !== i) {
      let temp = arr[i];
      arr[i] = arr[jMin];
      arr[jMin] = temp;
    }
    setArr(JSON.parse(JSON.stringify(arr)));
  }

  return arr;
}

export default selectionSort;

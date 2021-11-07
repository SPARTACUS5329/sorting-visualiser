import changeColor from "./changeColor";
import delay from "./delay";

const DELAY = 1;

async function insertionSort(arr, setArr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1].val > arr[j].val) {
      changeColor(arr[j - 1]);
      changeColor(arr[j]);
      await delay(DELAY);
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      changeColor(arr[j - 1]);
      changeColor(arr[j]);
      j--;
    }
    setArr(JSON.parse(JSON.stringify(arr)));
  }

  return arr;
}

export default insertionSort;

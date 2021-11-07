import changeColor from "./changeColor";
import delay from "./delay";

const DELAY = 1;

const bubbleSort = async (arr, setArr) => {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      changeColor(arr[j]);
      changeColor(arr[j + 1]);
      await delay(DELAY);
      if (arr[j].val > arr[j + 1].val) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        setArr(JSON.parse(JSON.stringify(arr)));
      }
      changeColor(arr[j]);
      changeColor(arr[j + 1]);
    }
  }

  setArr(arr);
  return arr;
};

export default bubbleSort;

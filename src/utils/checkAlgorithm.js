import generateRandomArr from "./randomArrayGenerator";

const checkAlgorithm = (algorithm) => {
  for (let i = 0; i < 1; i++) {
    let arr = generateRandomArr(-100, 100, 5);
    console.log(arr);
    let jsSorted = arr.sort((a, b) => {
      return a - b;
    });
    let mySort = algorithm(arr);
    console.log(jsSorted === mySort);
    console.log(jsSorted);
    console.log(mySort);
  }
};

export default checkAlgorithm;

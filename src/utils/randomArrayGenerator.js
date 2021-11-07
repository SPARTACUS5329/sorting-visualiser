const generateRandomArr = (lower, upper, N) => {
  let arr = [];
  for (let i = 0; i < N; i++) {
    let val = Math.floor(Math.random() * upper);
    if (val > lower) {
      arr.push({
        id: i,
        color: "initial",
        val,
      });
    } else {
      arr.push({
        id: i,
        color: "initial",
        val: lower,
      });
    }
  }
  return arr;
};

export default generateRandomArr;

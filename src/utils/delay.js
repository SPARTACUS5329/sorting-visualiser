const delay = (DELAY) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, DELAY);
  });
};

export default delay;

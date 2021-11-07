const changeColor = (element) => {
  if (element.color === "initial") {
    element.color = "checking";
    element.setColor("checking");
  } else {
    element.color = "initial";
    element.setColor("initial");
  }
  return element;
};

export default changeColor;

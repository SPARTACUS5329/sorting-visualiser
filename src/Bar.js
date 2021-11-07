import { useState } from "react";

const Bar = (props) => {
  let { element } = props.props;
  let [color, setColor] = useState("initial");
  element.setColor = setColor;

  return (
    <div
      className={`bar ${color}`}
      style={{ height: `${element.val}px` }}
    ></div>
  );
};

export default Bar;

import { useState } from "react";

const styles = {
  color: "red",
  lineActiveTrue: "red",
  lineActiveFalse: "blue",
};

function Chart() {
  // declares and changes number of lines
  const [amount, setAmount] = useState(10);
  const [place, setPlace] = useState(0);
  return (
    <>
      Hello
      <div className="chart">
        <Line value={100} color={"red"} />
        <Line value={97} color={"red"} />
      </div>
    </>
  );
}

// Lines
// need value -> length
// random order
// n amount and input

function Line(props) {
  //   const length = value;
  return (
    <>
      <div
        style={{
          height: props.value,
          backgroundColor: props.color,
          color: props.color,
        }}
        className="line"
      ></div>
    </>
  );
}

// have a value for number of lines
// have a value that changes css color sorting method

export default Chart;

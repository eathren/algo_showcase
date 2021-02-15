import { useState } from "react";

const styles = {
  color: "red",
  lineActiveTrue: "red",
  lineActiveFalse: "blue",
};

const n = 10;
const setup = [10, 20, 30, 40, 50];
const setup_object = [
  { value: 10, color: "red" },
  { value: 20, color: "red" },
  { value: 30, color: "red" },
  { value: 40, color: "red" },
  { value: 50, color: "red" },
  { value: 60, color: "red" },
];
const speed = 1;

function Chart(n) {
  // declares and changes number of lines
  const [amount, setAmount] = useState(10);
  const [place, setPlace] = useState(0);
  shuffleArray(setup);
  //   bubbleSort(setup);
  return (
    <>
      Hello
      <div className="chart">
        {/* {setup.map((e, i) => (
          <Line value={setup[i]} color={"red"} key={i} />
        ))} */}
        {setup_object.map((e, i) => (
          <Line value={setup[i]} color={"red"} key={i} />
        ))}
        <button onClick={bubbleSort}> Sort </button>
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

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function SortButton(arr) {
  return (
    <>
      <button onClick={bubbleSort(arr)}> Sort </button>
      {console.log("Test")}
    </>
  );
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("test");
  return arr;
}

export default Chart;

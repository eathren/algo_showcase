import { useState, useEffect } from "react";

import BubbleSort from "./sorts/BubbleSort";

// not used yet, used to show which index value is being manipulated
const styles = {
  color: "red",
  lineActiveTrue: "red",
  lineActiveFalse: "blue",
};

const setup_object = [10];

// later used to set speed, not implemented yet.
const speed = 1;

// not used yet
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Chart(n) {
  // declares and changes number of lines
  const [amount, setAmount] = useState(10);
  const [array, setArray] = useState([setup_object]);

  useEffect(() => {
    const n = 10;
    let temp_array = [];
    for (let i = 1; i <= n; i++) {
      temp_array.push(i * 10);
    }
    shuffleArray(temp_array);
    return setArray(temp_array);
  }, []);

  function bubbleSort(arr) {
    let temp_array = [];
    for (let i = 0; i < arr.length; i++) {
      // setTimeout(1000);
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      temp_array.push(arr[i]);
    }

    console.log("SORTED", arr);
    return setArray(temp_array);
    // shuffleArray(temp_array);
  }

  return (
    <>
      Hello
      <div className="chart">
        <ShowChart arr={array} />
      </div>
      {/* <SortButton />1 */}
      <button onClick={() => bubbleSort(array)}> Sort </button>
      {/* <button onClick={() => setArray(shuffleArray(array))}> Shuffle </button> */}
    </>
  );
}

function ShowChart(props) {
  let array = props.arr;
  return (
    <>
      {array.map((e, i) => (
        <Line value={array[i]} color={"red"} key={i} />
      ))}
      {console.log("TEST2", array)}
    </>
  );
}

// Lines
// need value -> length
// random order
// n amount and input

function Line(props) {
  const height = props.value;
  const color = props.color;
  return (
    <>
      <div
        style={{
          height: height,
          backgroundColor: color,
          color: color,
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
  console.log("debugging", arr);
  return arr;
}

function SortButton(props) {
  return (
    <>
      <button onClick={BubbleSort(props)}> Sort Button </button>
    </>
  );
}

export default Chart;

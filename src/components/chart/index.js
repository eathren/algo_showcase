import { useState, useEffect } from "react";

import BubbleSort from "./sorts/BubbleSort";

const styles = {
  color: "red",
  lineActiveTrue: "red",
  lineActiveFalse: "blue",
};

const setup_object = [
  { value: 10, color: "red" },
  { value: 20, color: "red" },
  { value: 30, color: "red" },
  { value: 40, color: "red" },
  { value: 50, color: "red" },
  { value: 60, color: "red" },
];

const speed = 1;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Chart(n) {
  // declares and changes number of lines
  const [amount, setAmount] = useState(10);
  const [place, setPlace] = useState(0);
  const [array, setArray] = useState(setup_object);
  const [object, setObject] = useState(setup_object);

  useEffect(() => {
    const n = 10;

    console.log("Setting n");
    let temp_array = [];
    for (let i = 1; i <= n; i++) {
      temp_array.push({ value: i * 10, color: "red" });
    }
    console.log(temp_array);
    return setArray(temp_array);
  });

  useEffect(() => {
    console.log("shuffling");
    shuffleArray(array);
    return array;
  });

  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(1000);
      console.log("Sort array", arr[i], arr[i].value);
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  // const bubbleSort = (arr) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     setTimeout(1000);
  //     for (let j = 0; j < arr.length; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         let temp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //       }
  //     }
  //   }
  // };

  //   bubbleSort(setup);
  return (
    <>
      Hello
      <div className="chart">
        {/* {setup.map((e, i) => (
          <Line value={setup[i]} color={"red"} key={i} />
        ))} */}
        {console.log(array)}
        {array.reverse().map((e, i) => (
          <Line value={array[i]} color={"red"} key={i} />
        ))}
      </div>
      {/* <SortButton />1 */}
      <button onClick={() => setArray(bubbleSort(array))}> Sort </button>
      <button onClick={() => setArray(shuffleArray(array))}> Shuffle </button>
    </>
  );
}

// Lines
// need value -> length
// random order
// n amount and input

function Line(props) {
  const height = props.value.value;
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
    console.log("Shuffle array", arr[i].value);
  }
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

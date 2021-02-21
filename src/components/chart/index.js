import { useEffect, useState } from "react";

import BubbleSort from "./sorts/BubbleSort";

// not used yet, used to show which index value is being manipulated
const styles = {
  color: "red",
  lineActiveTrue: "red",
  lineActiveFalse: "blue",
};

const setup_object = [20, 60, 10, 40, 50, 70];

// later used to set speed, not implemented yet.
const speed = 1;

// not used yet
// function sleep() {
//   return new Promise((resolve) => setTimeout(resolve, 550));
// }

function Chart(n) {
  // declares and changes number of lines
  // const [amount, setAmount] = useState(10);
  const [array, setArray] = useState(setup_object);

  useEffect(() => {}, []);

  // this shuffled the array after setting array values based off of n

  // removed while I troubleshoot. Plus it was shuffling every re-render.

  // useEffect(() => {
  //     const n = 10;
  //     let temp_array = [];
  //     for (let i = 1; i <= n; i++) {
  //         temp_array.push(i * 10);
  //     }
  //     temp_array = shuffleArray(temp_array);
  //     console.log("Shuffled arr", temp_array)
  //     return setArray(temp_array);
  // }, []);
  function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  function arraySwap(arr, indexA, indexB) {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
    console.log(arr[indexA], arr[indexB]);
    setArray([...arr], 30000);
  }

  //   let bubbleSort = () => {
  async function bubbleSort() {
    const arr = array;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          //   let tmp = arr[j];
          //   arr[j] = arr[j + 1];
          //   arr[j + 1] = tmp;
          await sleep(550);
          let indexA = j;
          let indexB = j + 1;
          arraySwap(arr, indexA, indexB);
        }
      }
    }
    // setArray([...arr]);
  }

  //   async function bubbleSort() {
  //     const arr = array;
  //     console.log("Pre-sort", arr);
  //     arr.map((e1) =>
  //       arr.map((e2, i) => {
  //         if (arr[i] > arr[i + 1]) {
  //           //   sleep().then(() => {
  //           let indexA = i;
  //           let indexB = i + 1;
  //           //   [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swapping

  //           console.log("test", arr[indexA], arr[indexB]);
  //           [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]; // swapping

  //           //   arraySwap(arr, indexA, indexB);
  //           //   });
  //           setArray([...arr]);
  //           //   setArray([...arr]);
  //         }
  //       })
  //     );
  //     // setArray([...arr]);
  //   }

  return (
    <>
      <div className="chart">
        {array.map((e, i) => (
          <Line
            value={array[i]}
            className={""}
            isActive={false}
            isChecking={false}
            styles={styles}
            key={i}
            color={"red"}
          />
        ))}
      </div>
      <button onClick={() => bubbleSort()}> Sort </button>
      {array}
    </>
  );
}

function Line(props) {
  const height = props.value;
  const color = props.color;

  //   if (props.isActive) {
  //     className += "line-active";
  //   }
  //   if (props.isChecking) {
  //     className += "line-checking";
  //   }
  //   if (!props.isActive || !props.isChecking) {
  //     className += "line-normal";
  //   }
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

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log("debugging", arr);
  return arr;
}

export default Chart;

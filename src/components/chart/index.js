import { useState, useEffect } from "react";

import BubbleSort from "./sorts/BubbleSort";

// not used yet, used to show which index value is being manipulated
const styles = {
    color: "red",
    lineActiveTrue: "red",
    lineActiveFalse: "blue",
};

const setup_object = [30, 20, 10, 50, 40, 80];

// later used to set speed, not implemented yet.
const speed = 1;

// not used yet
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function Chart(n) {
    // declares and changes number of lines
    const [amount, setAmount] = useState(10);
    const [array, setArray] = useState(setup_object);
    const [tempArray, setTempArray] = useState();

    useEffect(() => {


    }, []);

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


    // function ShowChart() {
    //     return (
    //         <>
    //             {console.log("What in tarnatoin", array)}
    //             {array.map((e, i) => (
    //                 <Line value={array[i]} color={"red"} key={i} />
    //             ))}
    //         </>
    //     );
    // }


    // Kind of works, but runs all at once instead of showing steps. 
    function bubbleSort() {
        console.log(array)
        array.map(e1 => array.map((e2, i) => {
            if (array[i] > array[i + 1]) { // comparing adjacent elements
                [array[i], array[i + 1]] = [array[i + 1], array[i]]  // swapping
            }
        }))
        setArray(array)
        console.log(array)
        // return setArray(array)
    }

    return (
        <>
            Hello
            <div className="chart">
                {array}
                {console.log(array)}
                {array.map((e, i) => (
                    <Line value={array[i]} color={"red"} key={i} />
                ))}
            </div>
            <button onClick={() => bubbleSort()}> Sort </button>
            {/* {bubbleSort()} */}
            {/* <button onClick={() => setArray(bubbleSort(array))}> Sort </button> */}
            {/* <button onClick={() => setArray(shuffleArray(array))}> Shuffle </button> */}
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

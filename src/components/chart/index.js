import { useState, useEffect } from "react";

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
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


function Chart(n) {
    // declares and changes number of lines
    // const [amount, setAmount] = useState(10);
    const [array, setArray] = useState(setup_object);

    useEffect(() => {


    }, []);

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




    function bubbleSort() {
        const arr = array
        console.log("Pre-sort", arr)
        arr.map(e1 => arr.map((e2, i) => {
            if (arr[i] > arr[i + 1]) { // comparing adjacent elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]  // swapping
            }
        }))
        console.log("Post sort", arr)

        console.log(arr)
        setArray([...arr])
        return [...arr]
        // return setArray(array)
    }

    return (
        <>
            <div className="chart">
                {array.map((e, i) => (
                    <Line value={array[i]} color={"red"} key={i} />
                ))}
            </div>
            <button onClick={() => bubbleSort()}> Sort </button>
            {array}
        </>
    );
}


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

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log("debugging", arr);
    return arr;
}


export default Chart;

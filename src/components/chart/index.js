import { useEffect, useState } from "react";

import BubbleSort from "./sorts/BubbleSort";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// not used yet, used to show which index value is being manipulated

const useStyles = makeStyles({
    root: {
        width: 300,
    },
    sliderContainer: {
        width: "80%",
        maxWidth: "80%",
    },
});
const styles = {
    color: "red",
    lineActiveTrue: "red",
    lineActiveFalse: "blue",
};

const ColumnSlider = withStyles({
    root: {
        color: "#52af77",
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);


function Chart() {
    const classes = useStyles();
    // declares and changes number of lines
    const [array, setArray] = useState([]);
    const [columns, setColumns] = useState(20);
    const [speed, setSpeed] = useState(200);
    const [reset, setReset] = useState([]);

    // sets up columns and shuffles them
    useEffect(() => {
        // sets up initial columns, shuffles them.
        const n = columns;
        let tempArray = [];
        for (let i = 1; i <= n; i++) {
            tempArray.push({ "value": (i * (200 / columns)), "color": 'red' });

            // tempArray.push(i * (200 / columns));
        }
        tempArray = shuffleArray(tempArray);

        setArray([...tempArray]);
        console.log(tempArray)
    }, []);

    function sleep(speed) {
        return new Promise(
            (resolve) => setTimeout(resolve, 201 - speed)
        );
    }

    // handles setting the sort speed. Base is 200.
    const handleSliderChangeSpeed = (event, value) => {
        setSpeed(value);
    };

    // handles slider setting column amount
    const handleSliderChangeColumns = (event, value) => {
        console.log("here", columns, value);
        let tempArray = [];
        const n = value;
        for (let i = 1; i <= n; i++) {
            tempArray.push(i * (200 / columns));
        }

        tempArray = shuffleArray(tempArray);
        setArray([...tempArray]);
        setColumns(value);
    };

    const resetButton = () => {
        if (reset.length > 1) {
            setArray([...reset]);
        }
        else {
            setArray([...array])
        }
        console.log("Reset", reset);
    };



    function arraySwap(arr, indexA, indexB) {

        [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
        // console.log(arr[indexA].value, arr[indexB].value)
        setArray([...arr]);
    }

    async function bubbleSort() {
        const arr = array;
        setReset([...arr]);
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                let indexA = j;
                let indexB = j + 1;

                if (arr[j].value >= arr[j + 1].value) {

                    arr[j].color = "blue"
                    arr[j + 1].color = "orange"
                    arraySwap(arr, indexA, indexB);
                    await sleep(speed);
                }
            }
        }
    }

    function stopAll() { }

    return (
        <>
            <Container>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <div className="chart">
                            {array.map((e, i) => (
                                <Line
                                    value={array[i].value}
                                    className={""}
                                    isActive={false}
                                    isChecking={false}
                                    styles={styles}
                                    key={i}
                                    color={array[i].color}
                                />
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <button onClick={() => bubbleSort()}>Sort </button>
                        <button onClick={() => resetButton()}> Reset </button>
                    </Grid>
                    {/* {array} */}
                    {/* <Grid item xs={12}> */}
                    <Typography id="discrete-slider" gutterBottom>
                        Columns
          </Typography>
                    <div className={classes.sliderContainer}>
                        <ColumnSlider
                            value={columns}
                            onChange={handleSliderChangeColumns}
                            valueLabelDisplay="auto"
                            aria-label="Column slider"
                            defaultValue={20}
                            step={10}
                            //   marks
                            min={10}
                            max={150}
                        />
                        <Typography id="discrete-slider" gutterBottom>
                            Speed
            </Typography>
                        <ColumnSlider
                            value={speed}
                            onChange={handleSliderChangeSpeed}
                            valueLabelDisplay="auto"
                            aria-label="speed slider"
                            defaultValue={100}
                            step={1}
                            //   marks
                            min={1}
                            max={200}
                        />
                    </div>
                    {/* </Grid> */}
                </Grid>
            </Container>
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
    return arr;
}

export default Chart;

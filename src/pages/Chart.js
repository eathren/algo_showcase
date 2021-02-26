import { useEffect, useState } from "react";

// import BubbleSort from "./components/sorts/BubbleSort";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
      tempArray.push({ value: i * (200 / columns), color: "red" });

      // tempArray.push(i * (200 / columns));
    }
    tempArray = shuffleArray(tempArray);

    setArray([...tempArray]);
  }, []);

  function sleep(speed) {
    return new Promise((resolve) => setTimeout(resolve, 201 - speed));
  }

  // handles setting the sort speed. Base is 200.
  const handleSliderChangeSpeed = (event, value) => {
    setSpeed(value);
  };

  // handles slider setting column amount
  const handleSliderChangeColumns = (event, value) => {
    let tempArray = [];
    const n = value;
    for (let i = 1; i <= n; i++) {
      tempArray.push({ value: i * (200 / columns), color: "red" });
    }

    tempArray = shuffleArray(tempArray);
    setArray([...tempArray]);
    setColumns(value);
  };

  const resetButton = () => {
    if (reset.length > 1) {
      setArray([...reset]);
    } else {
      setArray([...array]);
    }
  };

  function arraySwap(arr, indexA, indexB) {
    // arr[indexA].color = "blue"
    // arr[indexB].color = "orange"
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
    // [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
    setArray([...arr]);
  }

  async function bubbleSort() {
    const arr = array;
    setReset([...arr]);
    let len = arr.length;
    let count = 0;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j].value > arr[j + 1].value) {
          let indexA = j;
          let indexB = j + 1;
          arr[indexA].color = "orange";
          arr[indexB].color = "blue";

          arraySwap(arr, indexA, indexB);
          // arr[j].color = "red"
          await sleep(speed);
        }
        arr[j].color = "red";
        arr[j + 1].color = "red";
      }
      // arr[i].color = "red"
      // arr[i + 1].color = "red"
    }
    setArray([...arr]);
  }

  function stopAll() {}

  return (
    <>
      <Container>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}></Grid>
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
            <ButtonGroup color="secondary">
              <Button onClick={() => bubbleSort()}> Bubble Sort</Button>
              <Button onClick={() => resetButton()}> Reset</Button>
            </ButtonGroup>
          </Grid>
          {/* {array} */}
          {/* <Grid item xs={12}> */}
          <br />
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

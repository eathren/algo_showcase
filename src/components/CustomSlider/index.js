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

// late

const CustomSlider = ({ label, columns, setColumns }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.margin} />
      <Typography gutterBottom>{label}</Typography>
      <ColumnSlider
        valueLabelDisplay="auto"
        aria-label="column slider"
        step={10}
        //   marks
        min={10}
        max={200}
        defaultValue={20}
        value={columns}
        onChange={(event, v) => {
          setColumns(v);
        }}
      />
    </>
  );
};
export default CustomSlider;

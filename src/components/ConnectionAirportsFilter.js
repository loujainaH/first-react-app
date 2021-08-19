import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import AddBoxRoundedIcon from "@material-ui/icons/AddCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import RemoveBoxRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    // '& > *': {
    //   margin: theme.spacing(3),}
    // display: "flex"
  },
  title: {
    textAlign: "left",
    marginLeft: "2%"
  },
  paper: {
    marginRight: theme.spacing(2),
    width: "110%",


    height: "200px",
    overflow: "hidden",
    // overflowy: "auto",
    overflow: 'auto'
    // height: "200px",

  },
  button: {
    alignItems: "flex-end"
  },
  down: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "2%",
  },
  b: {
    alignItems: "Start"
  },
  formControl: {
    margin: theme.spacing(3),
    textAlign: "left"
  },

  price: {
    textAlign: "left",
    marginLeft: "0%"
  },
  h7: {
    textAlign: "left",
    marginLeft: "2%",
    marginTop: "2%"
  },
}));
function valuetext(value) {
  return `${value}°C`;
}
export default function MenuListComposition({ count, setCount }) {
  const classes = useStyles();
  const [vari, setvariant] = React.useState('outlined');
  const [color, setcolor] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [state, setState] = React.useState({

    gilad: true,
    jason: false,
    antoine: false,
  });
  const [count2, setCount2] = useState(0);
  const [col, setCol] = useState("disabled");
  const [col2, setCol2] = useState("disabled");


  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const [value, setValue] = React.useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setvariant('default')
    setcolor("primary")
  };
  const { gilad, jason, antoine } = state;



  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }



  const handleChange2 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setvariant('default')
    setcolor("primary")
  };


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleChange3 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setvariant('default')
    setcolor("primary")
  };

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Chip
            label="Connecting Airports"
            component="a"
            href="#chip"
            clickable
            variant={vari}
            color={color}
          />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <div className={classes.title}>
                      <b >Connecting airports</b>
                    </div>
                    <div className={classes.h7}>
                      <h7>Layover duration</h7></div>
                    <div className={classes.down}>
                      <FormControl component="fieldset" className={classes.formControl}>

                        <FormGroup>
                          <div className={classes.price}>

                          </div>
                          <Slider
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                          />


                          <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item>All connecting airports</Grid>
                            <Grid item>
                              <FormControlLabel
                                control={
                                  <Switch
                                    className={classes.button}
                                    checked={state.checkedB}
                                    onChange={handleChange2}
                                    name="checkedB"
                                    color="primary"

                                  />
                                }
                              />
                            </Grid>

                          </Grid>

                          <FormControlLabel
                            control={<Checkbox checked={state.A} onChange={handleChange3} name="A" color="primary" />}
                            label="Austrian"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={state.B} onChange={handleChange3} name="B" color="primary" />}
                            label="EgyptAir"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={state.C} onChange={handleChange3} name="C" color="primary" />}
                            label="Etihad"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={state.D} onChange={handleChange3} name="D" color="primary" />}
                            label="Lufthansa"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={state.E} onChange={handleChange3} name="E" color="primary" />}
                            label="Qatar Airways"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={state.F} onChange={handleChange3} name="F" color="primary" />}
                            label="Royal Jordanian"
                          />

                        </FormGroup>
                      </FormControl>
                    </div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>




    </div>
  );
}


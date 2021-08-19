// import React, {useState , useTheme } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
// import { makeStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';
import Chip from "@material-ui/core/Chip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Checkbox from '@material-ui/core/Checkbox';
// import AddBoxRoundedIcon from "@material-ui/icons/AddCircleRounded";
// import IconButton from "@material-ui/core/IconButton";
// import RemoveBoxRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



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
    marginLeft: "9%"
  },
  paper: {
    marginRight: theme.spacing(2),
    // width:"100%",

    // height: "200px",
    overflow: "hidden",
    // overflowy: "auto",
    overflow: 'auto'
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

  bags: {
    textAlign: "left",
    marginLeft: "-10%"
  },
  tabs: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },

  departure: {

    color: "#818181",

  },
  arrival: {

    color: "#818181",

  },
  icon1: {
    transform: "scaleX(-1)"
  },

}));
function valuetext(value) {
  return `${value}°C`;
}
export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState([0, 100]);
  const [value3, setValue3] = React.useState([0, 100]);
  const [value4, setValue4] = React.useState([0, 100]);
  const [value5, setValue5] = React.useState([0, 100]);
  const [vari, setvariant] = React.useState('outlined');
  const [color, setcolor] = React.useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);


  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
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






  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleChange1 = (event, newValue) => {
    setValue2(newValue);
    setvariant('default')
    setcolor("primary")
  };
  const handleChange2 = (event, newValue) => {
    setValue3(newValue);
    setvariant('default')
    setcolor("primary")
  };
  const handleChange3 = (event, newValue) => {
    setValue4(newValue);
    setvariant('default')
    setcolor("primary")
  };
  const handleChange4 = (event, newValue) => {
    setValue5(newValue);
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
            label="Times"
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
                      <b >Times</b>
                    </div>
                    <div className={classes.down}>
                      <FormControl component="fieldset" className={classes.formControl}>

                        <FormGroup>
                          <div className={classes.price}>
                            <AppBar position="static" color="default">
                              <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                              >
                                <Tab label="Outbound" {...a11yProps(0)} />
                                <Tab label="Return" {...a11yProps(1)} />

                              </Tabs>
                            </AppBar>
                            <SwipeableViews
                              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                              index={value}
                              onChangeIndex={handleChangeIndex}
                            >
                              <TabPanel value={value} index={0} dir={theme.direction}>
                                <div className={classes.departure}>
                                  <FlightTakeoffIcon color="disabled" /> <small>Departure</small>
                                  <Slider
                                    value={value2}
                                    onChange={handleChange1}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                  />
                                </div>
                                <div className={classes.arrival}>
                                  <FlightLandIcon color="disabled" /> <small>Arrival</small>
                                  <Slider
                                    value={value3}
                                    onChange={handleChange2}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                  />
                                </div>


                              </TabPanel>
                              <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className={classes.departure}>
                                  <FlightTakeoffIcon className={classes.icon1} color="disabled" /> <small>Departure</small>
                                  <Slider
                                    value={value4}
                                    onChange={handleChange3}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                  />
                                </div>
                                <div className={classes.arrival}>
                                  <FlightLandIcon className={classes.icon1} color="disabled" /> <small>Arrival</small>
                                  <Slider
                                    value={value5}
                                    onChange={handleChange4}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                  />
                                </div>


                              </TabPanel>
                            </SwipeableViews>
                          </div>
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

// import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
// import { makeStyles } from "@material-ui/core/styles";
// import Chip from "@material-ui/core/Chip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';






import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AirlineFilter from "../components/AirlineFilter"
import BagsFilter from "../components/BagsFilter"
import PriceFilter from "../components/PriceFilter"
import TimesFilter from "../components/TimesFilters"
import DurationFilter from "../components/DurationFilter"
import ConnectingAirports from "../components/ConnectionAirportsFilter"
import StopFilter from "../components/StopFilter"
import AllFilters from "../components/AllFilters"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '-2%',
    width: "1010px",
    justifyContent: "space-between",
    // marginLeft: "190px",
    // '& > *': {
    //   margin: theme.spacing(0),
    // },


  },
  line: {
    // width:"5%",
    display: 'flex',
    length: "1",
    width: "72%",
    marginLeft: "15%",

    //maxWidth:"30",


  },
}));

export default function OutlinedChips() {
  const classes = useStyles();
  const [BagsCount, setBagsCount] = useState(0);
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (

    <div className="Rfilters">
      {/* <div className={classes.allFilters}>
All Filters
</div> */}

      <div className={classes.root}>
        <AllFilters count={BagsCount} setCount={setBagsCount} />
        <StopFilter />
        <AirlineFilter />
        <BagsFilter count={BagsCount} setCount={setBagsCount} />
        <PriceFilter />
        <TimesFilter />
        <ConnectingAirports />
        <DurationFilter />



      </div>

      {/* <hr className={classes.line}></hr> */}



    </div>

  );
}

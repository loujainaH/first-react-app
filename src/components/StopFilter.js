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

import React,{useState} from 'react';
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
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(3),}
      // display: "flex"
    },
    title:{
      textAlign:"left",
      marginLeft:"2%"
    },
    paper: {
      marginRight: theme.spacing(2),
       width:"100%",
      
      // height: "200px",
     
    },
    down: {
      display: "flex",
      flexDirection: "column",
      marginLeft:"2%",
    },
    b:{
      alignItems:"Start"
    },
    formControl: {
      margin: theme.spacing(3),
      textAlign:"left"
    },
  
    bags:{
      textAlign:"left",
      marginLeft:"-10%"
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
    
<div className={classes.root}>

<div>
    
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Chip
            label="Stops"
            component="a"
            href="#chip"
            clickable
            variant="outlined"
            // deleteIcon={<DoneIcon />}
            deleteIcon={<ExpandMoreIcon />}
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
                      <b >Stops</b>
                    </div>
                    <div className={classes.down}>
                     
                      <RadioGroup
                        aria-label="quiz"
                        name="quiz"
                        color="primary"
                        value={value}
                        onChange={handleRadioChange}
                      >
                        <FormControlLabel
                          value="best"
                          color="primary"
                          control={<Radio color="primary" />}
                          label="Any number of stops"
                        />
                        <FormControlLabel
                          value="worst"
                          control={<Radio color="primary"/>}
                          label="Non-stop only"
                        />
                        <FormControlLabel
                          value="w"
                          control={<Radio color="primary"/>}
                          label="1 stop or fewer"
                        />
                        <FormControlLabel
                          value="r"
                          control={<Radio color="primary" />}
                          label="2 stop or fewer"
                        />
                      </RadioGroup>
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

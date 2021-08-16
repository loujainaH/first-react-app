import React, {useState} from "react";
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

import FormGroup from '@material-ui/core/FormGroup';

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
    // width:"100%",
    
    // height: "200px",
    overflow: "hidden",
    // overflowy: "auto",
    overflow: 'auto'
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

export default function MenuListComposition({count,setCount}) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
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
  const handleIncrement = () => {
    if(count===1){
      // setCount(1);
      setCount(count => count + 1);
      setCol("primary")
    }
    
    else{
  setCount(count => count + 1);
  setCol("primary")}
  console.log("handleInc ", count)
};

const handleIncrement2 = () => {
  if(count2===1){
    // setCount(1);
    setCount2(count2 => count2 + 1);
    setCol2("primary")
  }
  
  else{
setCount2(count2 => count2 + 1);
setCol("primary")}
console.log("handleInc2 ", count2)
};

//Create handleDecrement event handler
const handleDecrement = () => {
    if(count===0){
  setCount(0);
  setCol("disabled")}
  // if(count==1){
  //     setCol("disabled")
     
  // }
  else{
      setCount(prevCount => prevCount - 1);
  }
};

const handleDecrement2 = () => {
  if(count2===0){
setCount2(0);
setCol2("disabled")}
// if(count==1){
//     setCol("disabled")
   
// }
else{
    setCount2(prevCount2 => prevCount2 - 1);
}
};
const iconColor=(value)=>{
if(count+1===0){
  setCol("disabled")
  console.log("disabled",{count})
}
if(count==1&&value==="dec"){
  setCol("disabled")
  // console.log("ahmed")
}
else if(count===0 && value==="dec"){
  setCol("disabled")
}
else {
  setCol("primary")
  console.log("primary" ,{count})
}
}


const func2 =()=>{
  handleIncrement();
  iconColor("inc");
}
const func =()=>{
  
    handleDecrement();
    iconColor("dec");
    
}




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
            label="Bags"
            component="a"
            href="#chip"
            clickable
            variant="outlined"
            // deleteIcon={<DoneIcon />}
            //deleteIcon={<ExpandMoreIcon />}
            // label="Stops" component="a" href="#chip" clickable variant="outlined"
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
                      <b >Bags</b>
                    </div>
                    <div className={classes.down}>
                    <FormControl component="fieldset" className={classes.formControl}>
                   
        <FormGroup>
        <div className="counter">
    <small className={classes.bags}>Carry-on bags</small> 
      <IconButton color={col} sign="-"  onClick={func} >
        <RemoveBoxRoundedIcon />
      </IconButton>
        {count}
        <IconButton color="primary" sign="-"   onClick={func2} >
        <AddBoxRoundedIcon />
      </IconButton>
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


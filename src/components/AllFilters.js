import React ,{useState} from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import TuneIcon from '@material-ui/icons/Tune';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from "@material-ui/core/IconButton";
import AddBoxRoundedIcon from "@material-ui/icons/AddCircleRounded";
import RemoveBoxRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import Slider from '@material-ui/core/Slider';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {  useTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

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
      '& > *': {
        margin: theme.spacing(3),}
      // display: "flex"
    },
    title:{
      textAlign:"left",
      marginLeft:"9%"
    },
    paper: {
      marginRight: theme.spacing(2),
      width:"100%",
      
      
    //   height: "10%",
      height: "300px",
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
  
    price:{
      textAlign:"left",
      marginLeft:"0%"
    },
    filters:{
        color:"#0F56B3",
    }
  }));

  function valuetext(value) {
    return `${value}EGP`;
  }

export default function MenuListComposition({count,setCount}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  
  const [value, setValue] = React.useState("");
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const [col, setCol] = useState("disabled");
  const [value6, setValue6] = React.useState(0);
  const [value2, setValue2] = React.useState([0, 100]);
  const [value3, setValue3] = React.useState([0, 100]);
  const [value4, setValue4] = React.useState([0, 100]);
  const [value5, setValue5] = React.useState([0, 100]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
 

  const handleChange6 = (event, newValue) => {
    setValue6(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue6(index);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleChange7 = (event, newValue) => {
    setValue7(newValue);
  };
  const handleChange8 = (event, newValue) => {
    setValue8(newValue);
  };
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


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
    
    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
      };
      const handleChange3 = (event, newValue) => {
        setValue3(newValue);
      };
      const handleChange4 = (event, newValue) => {
        setValue4(newValue);
      };
      const handleChange5 = (event, newValue) => {
        setValue5(newValue);
      };

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
const [value1, setValue1] = React.useState(1);
const [value7, setValue7] = React.useState(1);
const [value8, setValue8] = React.useState(1);
  const func2 =()=>{
    handleIncrement();
    iconColor("inc");
  }
  const func =()=>{
    
      handleDecrement();
      iconColor("dec");
      
  }
  return (
    <div className={classes.root}>
     
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          
       <div className={classes.filters}><TuneIcon/>  All Filters</div> 
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
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
                    <Divider />
                 
                
                    <div className={classes.title}>
                      <b >Airlines</b>
                    </div>
                    <div className={classes.down}>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Airlines</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={state.A} onChange={handleChange} name="A" color="primary"/>}
            label="Austrian"
          />
          <FormControlLabel
            control={<Checkbox checked={state.B} onChange={handleChange} name="B" color="primary"/>}
            label="EgyptAir"
          />
          <FormControlLabel
            control={<Checkbox checked={state.C} onChange={handleChange} name="C" color="primary" />}
            label="Etihad"
          />
          <FormControlLabel
            control={<Checkbox checked={state.D} onChange={handleChange} name="D" color="primary" />}
            label="Lufthansa"
          />
          <FormControlLabel
            control={<Checkbox checked={state.E} onChange={handleChange} name="E" color="primary"/>}
            label="Qatar Airways"
          />
          <FormControlLabel
            control={<Checkbox checked={state.F} onChange={handleChange} name="F" color="primary"/>}
            label="Royal Jordanian"
          />
        </FormGroup>
        </FormControl> 
                    </div>
                    <Divider />
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
<Divider/>
                    <div className={classes.title}>
                      <b >Price</b>
                    </div>
                    <div className={classes.down}>
                    <FormControl component="fieldset" className={classes.formControl}>
                   
        <FormGroup>
        <div className={classes.price}>
    <small className={classes.price}>All prices</small> 
    </div>
    <Slider
        value={value1}
        min={10000}
        step={5000}
        max={160000}
        onChange={handleChange1}
        valueLabelDisplay="auto"

        aria-labelledby="custom thumb label"
        getAriaValueText={valuetext}
      />
      
        </FormGroup>
        </FormControl> 
                    </div>

                    <Divider/>
                    <div className={classes.title}>
                      <b >Times</b>
                    </div>
                    <div className={classes.down}>
                    <FormControl component="fieldset" className={classes.formControl}>
                    
        <FormGroup>
        <div className={classes.price}>   
      <AppBar position="static" color="default">
        <Tabs
          value={value6}
          onChange={handleChange6}
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
         <FlightTakeoffIcon  color="disabled"/> <small>Departure</small>
         <Slider
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
         </div>
         <div className={classes.arrival}>
         <FlightLandIcon  color="disabled"/> <small>Arrival</small>
         <Slider
        value={value3}
        onChange={handleChange3}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
         </div>


        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className={classes.departure}>
         <FlightTakeoffIcon  className={classes.icon1} color="disabled"/> <small>Departure</small>
         <Slider
        value={value4}
        onChange={handleChange4}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
         </div>
         <div className={classes.arrival}>
         <FlightLandIcon className={classes.icon1} color="disabled"/> <small>Arrival</small>
         <Slider
        value={value5}
        onChange={handleChange5}
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
                    <Divider/>
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
        value={value7}
        onChange={handleChange7}
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
            control={<Checkbox checked={state.A} onChange={handleChange3} name="G" color="primary"/>}
            label="Austrian"
          />
          <FormControlLabel
            control={<Checkbox checked={state.B} onChange={handleChange3} name="H" color="primary"/>}
            label="EgyptAir"
          />
          <FormControlLabel
            control={<Checkbox checked={state.C} onChange={handleChange3} name="I" color="primary" />}
            label="Etihad"
          />
          <FormControlLabel
            control={<Checkbox checked={state.D} onChange={handleChange3} name="J" color="primary" />}
            label="Lufthansa"
          />
          <FormControlLabel
            control={<Checkbox checked={state.E} onChange={handleChange3} name="K" color="primary"/>}
            label="Qatar Airways"
          />
          <FormControlLabel
            control={<Checkbox checked={state.F} onChange={handleChange3} name="L" color="primary"/>}
            label="Royal Jordanian"
          />
      
        </FormGroup>
        </FormControl> 
                    </div>
                    <Divider/>
                    <div className={classes.title}>
                      <b >Duration</b>
                    </div>
                    <div className={classes.down}>
                    <FormControl component="fieldset" className={classes.formControl}>
                   
        <FormGroup>
        <div className={classes.price}>
    <small className={classes.price}>Flight Duration</small> 
    </div>
    <Slider
        value={value8}
        min={1}
        step={1}
        max={36}
        onChange={handleChange8}
        valueLabelDisplay="auto"

        aria-labelledby="custom thumb label"
        getAriaValueText={valuetext}
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

import React from "react";
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
  paper: {
    marginRight: theme.spacing(2),
    width: "100%",

    height: "200px",
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
  title: {
    textAlign: "left",
    marginLeft: "9%"
  },
  formControl: {
    margin: theme.spacing(3),
    textAlign: "left"
  },
  Fdiv: {
    margin: 0,
  }
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  const [vari, setvariant] = React.useState('outlined');
  const [color, setcolor] = React.useState("");
  const { gilad, jason, antoine } = state;
  const changeFunc = () => {
    setvariant('default')
    setcolor("primary")


  }

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
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
            label="Airlines"
            component="a"
            href="#chip"
            clickable
            variant={vari}
            color={color}
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
                    onChange={changeFunc}
                  >
                    <div className={classes.title}>
                      <b >Airlines</b>
                    </div>
                    <div className={classes.down}>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Airlines</FormLabel>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox checked={state.A} onChange={handleChange} name="A" color="primary" />}
                            label="Austrian"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={state.B} onChange={handleChange} name="B" color="primary" />}
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
                            control={<Checkbox checked={state.E} onChange={handleChange} name="E" color="primary" />}
                            label="Qatar Airways"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={state.F} onChange={handleChange} name="F" color="primary" />}
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


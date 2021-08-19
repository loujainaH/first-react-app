import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PhoneIcon from '@material-ui/icons/Phone';
import { Title } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    root: {
        //  width: '60%',
        marginLeft: "16%",
        width: "634px",
        height: "89px",
        // display: "flex",
        // flexDirection: "column",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        // flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },

        accordion: {
            width: "634px",
            height: "89px",
        },
        accordion1: {
            marginTop: "50%",
            width: "634px",
            height: "89px",
        },
    },
    two: {
        marginTop: "20%",
    },
    margin: {
        margin: theme.spacing(1),
    },
    // summary: {
    //     width: "100px",
    // },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

    content: {
        display: "flex",
        flexDirection: "row",
    }
}));

export default function DetailedAccordion() {
    const classes = useStyles();
    const inputs = [];

    const [title, setTitle] = React.useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };


    for (let i = 1; i <= 4; i++) {
        inputs.push(
            <div className={classes.two}>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        className={classes.summary}
                    >
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Passenger 1 (Adult)</Typography>
                        </div>
                        <div className={classes.column}>
                            {/* <Typography className={classes.secondaryHeading}>Select trip destination</Typography> */}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <div className={classes.content}>
                            <div className={classes.col2}>
                                <div className={classes.margin}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">Title</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={title}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="input-with-icon-grid" label="First Name" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="input-with-icon-grid" label="Middle Name" />
                                        </Grid>
                                    </Grid>
                                </div>

                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="input-with-icon-grid" label="Last Name" />
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>


                            <div className={classes.col1}>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="input-with-icon-grid" label="Phone Number" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="input-with-icon-grid" label="Email" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextField id="input-with-icon-grid" label="Date of Birth" />
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                    <Divider />

                </Accordion>
            </div>
        )
    }
    return (
        <div className={classes.root}>
            {inputs}
            {/* <div>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        className={classes.summary}
                    >
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Passenger 1 (Adult)</Typography>
                        </div>
                        <div className={classes.column}>
                            {/* <Typography className={classes.secondaryHeading}>Select trip destination</Typography> */}
            {/* </div>
                    </AccordionSummary >
                    <AccordionDetails className={classes.details}>

                    </AccordionDetails>
                    <Divider />

                </Accordion >
            </div >
        <div className={classes.two}>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Passenger 1 (Adult)</Typography>
                    </div>
                    <div className={classes.column}>
                        {/* <Typography className={classes.secondaryHeading}>Select trip destination</Typography> */}
            {/* </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>

                </AccordionDetails>
                <Divider />
            </Accordion>
        </div> * /} */}


        </div >
    );
}

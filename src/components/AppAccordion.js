
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
import LH from '../images/LH.png';
import LX from '../images/LX.png';
import OS from '../images/OS.png';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '65%',
        marginLeft: "16%",
        marginTop: "5%",


        // '&$expanded': {
        //     margin: 'auto',
        //   },
    },

    title: {
        fontSize: theme.typography.pxToRem(22),
        horizontalAlign: "left",
        marginLeft: "-88%",
        color: '#202124',
    },
    title1: {
        fontSize: theme.typography.pxToRem(12),
        horizontalAlign: "left",
        marginLeft: "-55%",
        color: '#70757A',
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    heading1: {
        fontSize: theme.typography.pxToRem(15),
        color: "green",
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    TripIcon: {
        verticalAlign: 'bottom',
        height: 200,
        width: 20,
        marginLeft: "8%",
    },
    //   TripIcon: {
    //     verticalAlign: 'bottom',
    //     display:"flex",
    //     flexDirection:"row",
    //     height: 20,
    //     width: 20,
    //   },
    details: {
        //  alignItems: 'center',
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",


    },
    column: {
        //flexBasis: '33.33%',
        marginLeft: "5%",

    },

    column2: {
        //flexBasis: '33.33%',
        marginLeft: "0%",
        marginTop: "0%",

        fontSize: theme.typography.pxToRem(12),
        color: theme.palette.text.secondary,
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

    },
    text: {
        marginLeft: "3%",
        marginTop: "-1%",
        width: "70%",
        //fontSize: theme.typography.pxToRem(14),
        height: "30%",

    },
    text1: {
        marginLeft: "-3%",
        marginTop: "1%",
        fontSize: theme.typography.pxToRem(14),
        textAlign: "left",


    },
    text2: {
        marginLeft: "-3%",
        marginTop: "1%",
        fontSize: theme.typography.pxToRem(12),
        color: '#70757A',
        textAlign: "left",

    },
    line: {
        length: "1",
        width: "100%",
        marginLeft: "11%",
        marginTop: "-10%",
    },
    line2: {
        length: "1",
        width: "100%",
        marginLeft: "11%",
        marginTop: "-3%",
    },
    text3: {
        marginLeft: "11%",
        marginTop: "-8%",
        fontSize: theme.typography.pxToRem(14),
        // color:'#70757A',
        textAlign: "left",

    },

    action: {
        marginTop: "-11%",
    },

    accordion: {
        boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",

    },

    wrap: {
        display: "flex",
        flex: 5,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    Dep: {
        fontWeight: 1000,
        fontSize: theme.typography.pxToRem(19),

    }



}));

export default function DetailedAccordion() {
    const classes = useStyles();
    const [departure, setdeparture] = React.useState("");
    const [departure2, setdeparture2] = React.useState("");

    const func = () => {
        if (departure === "") {
            setdeparture("Departure")
        }

        else {
            setdeparture("")
        }
        console.log("departure")

    }

    const func2 = () => {
        if (departure2 === "") {
            setdeparture2("Departure")
        }

        else {
            setdeparture2("")
        }
        console.log("departure")

    }


    return (






        <div className={classes.accordion}>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                    onClick={func}
                >

                    <div className={classes.column}>
                        <img src={LH} alt="" />
                    </div>
                    <div className={classes.wrap}>
                        <div className={classes.column}>
                            <Typography className={classes.Dep}>{departure}</Typography>

                        </div>
                        <div className={classes.column}>
                            {/* <Typography className={classes.heading}>{departure}</Typography> */}
                            <Typography className={classes.heading}>9:00 AM - 8:45 PM</Typography>
                            <Typography className={classes.column2}>Lufthansa . EgyptAir </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>10 hr 45 min</Typography>
                            <Typography className={classes.column2}> LHR-CIA  </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>1 stop</Typography>
                            <Typography className={classes.column2}>5 hr 10 min MUC </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.heading1} color="green">EGP 6,505</Typography>
                            <Typography className={classes.column2}>round trip  </Typography>
                        </div>
                    </div>
                    <div className={classes.column2}>
                        {/* <Typography className={classes.secondaryHeading}>Select trip destination</Typography> */}
                    </div>

                    {/* Lufthansa . EgyptAir Operated by Lufthansa CityLine            LHR-CIA                                          5 hr 10 min MUC                      round trip */}
                </AccordionSummary>

                <AccordionDetails className={classes.details}>


                    <div className={classes.TripIcon}>
                        <TripOriginIcon
                            fontSize="small"
                            color="disabled"
                            label="Female"
                        />

                        <MoreVertIcon
                            fontSize="small"
                            color="disabled" />
                        <TripOriginIcon
                            fontSize="small"

                            color="disabled"
                        />
                    </div>
                    {/* <div className={classes.column} /> */}
                    <div className={classes.text}>
                        <Typography className={classes.text1}> 9:00 AM . Heathrow Airport (LHR)</Typography>
                        <Typography className={classes.text2}> Travel time: 1 hr 50 min</Typography>
                        <Typography className={classes.text1}> 11:50 AM . Munich International Airport (MUC)</Typography>

                    </div>


                    <hr className={classes.line}></hr>

                    <Typography className={classes.text3}> 5 hr 10 min layover . Munich (MUC)</Typography>


                    <hr className={classes.line2}></hr>
                    <div className={classes.TripIcon}>
                        <TripOriginIcon
                            fontSize="small"
                            color="disabled"
                            label="Female"
                        />

                        <MoreVertIcon
                            fontSize="small"
                            color="disabled" />
                        <TripOriginIcon
                            fontSize="small"

                            color="disabled"
                        />
                    </div>
                    {/* <div className={classes.column} /> */}
                    <div className={classes.text}>
                        <Typography className={classes.text1}> 5:00 PM . Munich International Airport (MUC)</Typography>
                        <Typography className={classes.text2}> Travel time: 3 hr 45 min</Typography>
                        <Typography className={classes.text1}> 8:45 AM . Cairo International Airport (CAI)</Typography>

                    </div>



                    {/* <div className={clsx(classes.column, classes.helper)}> 
             <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography> 
          </div> */}
                </AccordionDetails>
                <Divider />
                <ul>
                    <Link to="/results-return">
                        <AccordionActions className={classes.action}>

                            <Button variant="outlined" size="medium" color="primary" >Select flight</Button>

                        </AccordionActions>
                    </Link>
                </ul>
                <Divider />
            </Accordion>





        </div>



    );
}

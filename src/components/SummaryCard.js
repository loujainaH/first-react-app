// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: "25%",
//         // display: "flex",
//         marginleft: "70%"

//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         //   fontSize: 14,
//         fontSize: theme.typography.pxToRem(20),

//     },
//     pos: {
//         marginBottom: 12,
//     },
//     div: {
//         display: "flex",
//         marginleft: "70%",
//     }
// }));

// export default function SimpleCard() {
//     const classes = useStyles();
//     const bull = <span className={classes.bullet}>•</span>;

//     return (
//         <div className={classes.div}>
//             <Card className={classes.root}>
//                 <CardContent>
//                     <Typography className={classes.title} ariant="h5" component="h2">
//                         Trip Summary
//                     </Typography>
//                     <hr />
//                 </CardContent>

//             </Card>
//         </div>
//     );
// }

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "290px",
        wordWrap: "break-word",
        // overflow,
        '& > *': {
            margin: theme.spacing(1),
            // width: theme.spacing(16),
            // height: theme.spacing(16),
        },
    },

    paper: {

        borderRadius: "15px",
        width: "353px",
        height: "400px",


    },
    title: {
        fontSize: 22,
    },
    TripIcon: {
        verticalAlign: 'bottom',
        height: 200,
        width: 20,
        marginLeft: "0%",
    },

    text: {
        marginLeft: "11%",
        marginTop: "-82%",
        width: "100%",
        //fontSize: theme.typography.pxToRem(14),
        height: "30%",

    },
    text1: {
        marginLeft: "-3%",
        marginTop: "1%",
        fontSize: theme.typography.pxToRem(12),
        textAlign: "left",
        ovarflowWrap: "break-word",
        // overflowwrap: break-word;
        wordwrap: "break-word",

    },
    text2: {
        marginLeft: "-3%",
        marginTop: "1%",
        fontSize: theme.typography.pxToRem(12),
        color: '#70757A',
        textAlign: "left",

    },

    text3: {
        marginLeft: "11%",
        marginTop: "-3%",
        fontSize: theme.typography.pxToRem(12),
        // color:'#70757A',
        textAlign: "left",
    },

    // line: {
    //     length: "1",
    //     width: "100%",
    //     marginLeft: "11%",
    //     marginTop: "-10%",
    // },

    // line2: {
    //     length: "1",
    //     width: "100%",
    //     marginLeft: "11%",
    //     marginTop: "-3%",
    // },

}));

export default function SimplePaper() {
    const classes = useStyles();
    const [departureDate, setdepartureDate] = React.useState("Departure Time");
    const [departureAirport, setdepartureAirport] = React.useState("Departure Airport");
    const [ArrivaleDate, setArrivaleDate] = React.useState("Arrival Time");
    const [ArrivalAirport, setArrivalAirport] = React.useState("Arrival Airport");
    const [travelTime, settravelTime] = React.useState("");
    const [departureDate2, setdepartureDate2] = React.useState("Departure Time");
    const [departureAirport2, setdepartureAirport2] = React.useState("Departure Airport");
    const [ArrivaleDate2, setArrivaleDate2] = React.useState("Arrival Time");
    const [ArrivalAirport2, setArrivalAirport2] = React.useState("Arrival Airport");
    const [travelTime2, settravelTime2] = React.useState("");
    const [layOverTime, setlayOverTime] = React.useState("Layover");
    const [layOverCity, setlayOverCity] = React.useState("City");


    // const [departureDate, setdepartureDate] = React.useState("9:00 AM");
    // const [departureAirport, setdepartureAirport] = React.useState("Heathrow Airport (LHR)");
    // const [ArrivaleDate, setArrivaleDate] = React.useState("11:50 AM");
    // const [ArrivalAirport, setArrivalAirport] = React.useState("Munich International Airport (MUC)");
    // const [travelTime, settravelTime] = React.useState("1 hr 50 min");
    // const [departureDate2, setdepartureDate2] = React.useState("5:00 PM");
    // const [departureAirport2, setdepartureAirport2] = React.useState("Munich International Airport (MUC)");
    // const [ArrivaleDate2, setArrivaleDate2] = React.useState("8:45 AM");
    // const [ArrivalAirport2, setArrivalAirport2] = React.useState("Cairo International Airport (CAI)");
    // const [travelTime2, settravelTime2] = React.useState("3 hr 45 min");






    return (
        <div className={classes.root}>

            <Card className={classes.paper} elevation={3} >
                <CardContent>

                    <Typography className={classes.title} variant="h5" component="h2">
                        Your trip summary
                    </Typography>
                    {/* <Divider /> */}
                    <hr />
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
                        <Typography className={classes.text1}> {departureDate} . {departureAirport}</Typography>
                        <Typography className={classes.text2}> Travel time: {travelTime}</Typography>
                        <Typography className={classes.text1}> {ArrivaleDate} . {ArrivalAirport}</Typography>

                    </div>


                    <hr className={classes.line}></hr>

                    <Typography className={classes.text3}> {layOverTime} . {layOverCity}</Typography>


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
                        <Typography className={classes.text1}> {departureDate2} . {departureAirport2}</Typography>
                        <Typography className={classes.text2}> Travel time: {travelTime2}</Typography>
                        <Typography className={classes.text1}> {ArrivaleDate2} . {ArrivalAirport2}</Typography>

                    </div>

                </CardContent>
            </Card>
        </div>
    );
}

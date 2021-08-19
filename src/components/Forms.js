import React from 'react';
import Header from './Header';
import '../components/ResultPage.css'
import Sidebar from './Sidebar';
import SearchTest from "./Searchbar"
import Where from "./Where"
import Filters from "./Filters";
import BookData from "../Data.json";
import ResultPageSearch from './ResultPageSearch';
import CovidWarning from './CovidWarning'
import Home from "./Home";
import Result from "./Result";
import BestFlights from "./BestFlights"
import OtherFlights from "./OtherFlights"
import Footer from "./Footer"
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SummaryCard from "./SummaryCard"
import Stepper from "./Stepper"
import PassengerDetails from "./PassengerDetails"
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
    },


    filters: {
        width: "1010px",
        marginLeft: "16%",

    },
    Departing: {
        alignSelf: "",
    },
    title: {
        fontSize: theme.typography.pxToRem(26),
        horizontalAlign: "left",
        marginLeft: "-43%",
        color: '#202124',
        marginTop: "5%"
    },

    content: {
        flex: 1,
        display: "flex",
        /* align-items: center; */
        justifyContent: "center",
        position: "fixed",
        left: "80%",
        top: "40%",
        // width: "50%",
    }

}));
function ResultPage() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="header">
                <Header />
            </div>
            <Sidebar />

            <Stepper />


            <div className={classes.content}>
                <SummaryCard />
            </div>
            <Footer />

        </div>
    )

}

export default ResultPage;
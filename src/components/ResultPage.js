import React from 'react';
import Header from './Header';
import '../components/ResultPage.css'
import Sidebar from './Sidebar';
import SearchTest from "../components/Searchbar"
import Where from "../components/Where"
import Filters from "../components/Filters";
import BookData from "../Data.json";
import ResultPageSearch from './ResultPageSearch';
import CovidWarning from './CovidWarning'
import Home from "../components/Home";
import Result from "../components/Result";
import BestFlights from "../components/BestFlights"
import OtherFlights from "../components/OtherFlights"
import Footer from "../components/Footer"
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SummaryCard from "../components/SummaryCard"
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
            <div className={classes.filters}>


                <Result />

                <ResultPageSearch />

            </div>



            <CovidWarning />
            <div className={classes.column}>

                <Typography className={classes.title}>Choose Your Departing Flight:</Typography>
            </div>

            <BestFlights />
            <OtherFlights />
            <div className={classes.content}>
                <SummaryCard />
            </div>
            <Footer />

        </div>
    )

}

export default ResultPage;
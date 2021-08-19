import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "../components/Where.css";
import data from "../Data.json";
import * as airports from "airportsjs"

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import FlightIcon from '@material-ui/icons/Flight';
import { blue } from "@material-ui/core/colors";
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FlightLandIcon from '@material-ui/icons/FlightLand';
const useStyles = makeStyles((theme) => ({
  root: {

    margin: theme.spacing(1),
    height: "71px",
    flex: 1,
    // position: 'absolute',
    direction: "flex",
  },
  text: {
    display: "flex",
    flexDirection: "row",
    color: "black",

  },


  a: {
    '&:hover': {
      color: "grey",
    },
    textdecoration: "none!important",
    color: "black"
  },

  testssss: {
    height: "100px",
    width: "100px",
    backgroundcolor: "green"
  }


}
));


export default function BasicTextFields({ placeholder }) {
  const styles = useStyles({

  });
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  // const value = {input};
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    console.log({ filteredData })
  };

  const final = null;
  const clicked = (value, e) => {
    setWordEntered(value);
    console.log({ wordEntered });
    console.log({ value });
    // final={value};
    setFilteredData([]);
  };



  function SearchBar({ placeholder, data }) {


    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });

      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };

    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

  }
  //   SearchBar({placeholder,data})
  return (
    <form className={styles.root} noValidate autoComplete="off">
      <div className={styles.text}>

        <div className="resultsTo">
          <div className="searchInputTo">

            <TextField

              id="filled-basic" value={wordEntered} onChange={(event) => { handleFilter(event) }} type="search" label={placeholder} variant="filled"
              InputProps={{
                startAdornment: <InputAdornment position="start"> <FlightLandIcon /></InputAdornment>,
              }} />
            {/* <FormControl >
              <InputLabel htmlFor="input-with-icon-adornment">To</InputLabel>
              <Input
                value={wordEntered} onChange={(event) => { handleFilter(event) }} type="search" label={placeholder} variant="filled"
                startAdornment={
                  <InputAdornment position="start">
                    <FlightTakeoffIcon />
                  </InputAdornment>
                }
              />
            </FormControl> */}
          </div>
          {filteredData.length != 0 && (
            <div className="dataResultTo" >

              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <a className="aTo" onClick={(e) => clicked(value.title, e)} target="_blank">
                    <p>{value.title} </p>
                  </a>

                );
              })}
            </div>
          )}
        </div>


        {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      </div>

    </form>
  );
}
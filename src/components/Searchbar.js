
import React, { useState } from "react";
import "../components/Searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import FlightIcon from '@material-ui/icons/Flight';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import InputAdornment from '@material-ui/core/InputAdornment';

import { spacing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import data from "../Data.json";

const useStyles = makeStyles((theme) => ({
  root: {

    margin: theme.spacing(1),
    marginLeft: 0,
    height: "71px",

    // padding: '0px 330px',

    // position:'absolute',
    display: "flex",
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


  // const  handleSearchSelection = ({ value }) => {
  //     this.setState({
  //       searchSelection: value,
  //       placeholder: value
  //     })};


  //  const handleInputChange=(e)=> {
  //     const target = e.target;
  //     const value = target.value;
  //     const name = target.name;

  //     setState({
  //       [name]: value
  //     });
  //   }


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

        <div className="results">
          <div className="searchInputFrom">
            <TextField id="filled-basic" value={wordEntered} onChange={(event) => { handleFilter(event) }} type="search" label={placeholder} variant="filled"

              InputProps={{
                startAdornment: <InputAdornment position="start"> <FlightTakeoffIcon /></InputAdornment>,
              }} />
          </div>
          {filteredData.length != 0 && (
            <div className="dataResultFrom" >

              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <a className="aFrom" onClick={(e) => clicked(value.title, e)} target="_blank">
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
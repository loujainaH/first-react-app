import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "../components/Where.css";
import data from "../Data.json";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import FlightIcon from '@material-ui/icons/Flight';
import { blue } from "@material-ui/core/colors";
// function SearchBar({ placeholder, data }) {
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = data.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };
//   const clicked = (e) =>{
// setWordEntered(e);
// setFilteredData([]);
//   };

// return (
//   <div className="search">

//     <div className="searchInputs">

//       <input
//         type="text"

//         placeholder={placeholder}
//         value={wordEntered}
//         onChange={handleFilter}

//       />
//       {/* <div className="searchIcon">
//         {filteredData.length === 0 ? (
//           <SearchIcon />
//         ) : (
//           <CloseIcon id="clearBtn" onClick={clearInput} />
//         )} */}
//       {/* </div> */}
//     </div>
//     {filteredData.length != 0 && (
//       <div className="dataResult" >
//         {filteredData.slice(0, 15).map((value, key) => {
//           return (
//             <a className="dataItem" onClick={(e) => clicked(value.title, e)} target="_blank">
//               <p>{value.title} </p>
//             </a>

//           );
//         })}
//       </div>
//     )}


//   </div>
{/* <div></div>
    
  );
}

export default SearchBar; */}


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
  // results:{
  //     position:'absolute',
  //     display:"flex",
  //     // flexDirection:"row",
  //     // top:'1000 px',
  //     // left:'200'

  // },
  // dataResultFrom:{
  // position:'relative',
  // display:"flex",
  // flexDirection:"column",
  // top:'1000 px',
  // left:'200',
  // width:"10px",
  // margintop: "5px",
  // width: "300px",
  // height: "200px",
  // backgroundcolor: "white",
  // color:"white",
  // boxshadow: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
  // overflow: "hidden",

  //   position: "relative",
  //   margintop: "5px",
  //   width: "300px",
  //   height: "200px",
  //   backgroundcolor: "white",
  //   boxshadow: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
  //   overflow: "hidden",
  //    overflowy: "auto",
  //   /* border-color: lightblue; */
  //   borderradius : "8px",
  // },

  // display:"flex",
  // flexDirection:"column",
  //     position: "absolute",
  //     marginTop: "5px",
  //     width: "300px",
  //     height: "200px",
  //     backgroundcolor: "white",
  //     boxshadow: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
  //     overflow: "hidden",
  //     overflowy: "auto",
  //     borderradius: "8px",

  // },

  // searchInput:{
  //   // top: "0px",
  //   width: "226px",
  //   position: "absolute", 
  //   marginTop:"70px",
  //   marginLeft: "25px",
  //   // left: "14px",
  // },
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

        <div className="resultsTo">
          <div className="searchInputTo">
            <TextField id="filled-basic" value={wordEntered} onChange={(event) => { handleFilter(event) }} type="search" label={placeholder} variant="filled" />
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
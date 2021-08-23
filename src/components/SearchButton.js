import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import SearchIcon from '@material-ui/icons/Search';
import '../components/SearchButton.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  button: {
    //margin: theme.spacing(1),
    // alignItems: "center",
    //alignSelf: "center",
    bottom: 8,
  },
  buttonDiv: {

    flex: 1,
    display: "flex",
    /* align-items: center; */
    justifyContent: "center",
  },
}));



const mapStateToProps = (state) => {
  //console.log(state.DetailsReducer.details.destination)
  return {
    details: state.DetailsReducer.details

  };
};


export default connect(mapStateToProps)(IconLabelButtons);


function IconLabelButtons({ details }) {


  const classes = useStyles();
  const func = async () => {
    let reqBody = {
      data: {
        passengers: [
          {
            type: "adult"
          }
        ],
        slices: [
          {
            origin: details.origin,
            destination: details.destination,
            departure_date: "2021-08-30"
          }
        ],
        cabin_class: "economy"
      }

    }

    //resluts.slices.semg.length

    let response = await axios.post("http://app.stamped.travel:8080/offers/pagination", reqBody)
    console.log("lllllllll", response)
    console.log("lllllllll", response.data.cheapestFlights[0][0].owner.name)
    console.log("origin:", details.origin)
    console.log("length:", response.data.cheapestFlights[0].length)
  }
  return (
    <div className={classes.buttonDiv}>
      <ul>
        <Link to="/results">
          <div className={classes.button}>

            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SearchIcon />}
              onClick={func}
            >
              Search
            </Button>

          </div>
        </Link>
      </ul>
    </div>
  );
}

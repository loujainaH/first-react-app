import React, { useState } from "react";
import '../components/Counter4.css'
import AddBoxRoundedIcon from "@material-ui/icons/AddCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import RemoveBoxRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import { SettingsCellOutlined } from "@material-ui/icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  //console.log(state.DetailsReducer.details.destination)
  return {
    infants_on_lap: state.DetailsReducer.details.infants_on_lap,
  };
};
const mapDispatchToState = (dispatch) => {
  return {

    setInfantsOL: (infants_on_lap) => {
      dispatch({ type: 'setInfantsOL', payload: infants_on_lap });
    },


  };
};
export default connect(mapStateToProps, mapDispatchToState)(Counter4);

function Counter4({ count, setCount, setInfantsOL, infants_on_lap }) {
  // Set the initial count state to zero, 0

  const [count2, setCount2] = useState(0);
  const [col, setCol] = useState("disabled");
  const [col2, setCol2] = useState("disabled");

  // Create handleIncrement event handler
  const handleIncrement = () => {
    if (infants_on_lap === 1) {
      // setCount(1);
      setInfantsOL(infants_on_lap + 1);
      setCol("primary")
    }

    else {
      setInfantsOL(infants_on_lap + 1);
      setCol("primary")
    }
  };


  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (infants_on_lap === 0) {
      setInfantsOL(0);
      setCol("disabled")
    }
    // if(count==1){
    //     setCol("disabled")

    // }
    else {
      setInfantsOL(infants_on_lap - 1);
    }
  };


  const iconColor = (value) => {
    if (infants_on_lap + 1 === 0) {
      setCol("disabled")
      console.log("disabled", { infants_on_lap })
    }
    if (infants_on_lap == 1 && value === "dec") {
      setCol("disabled")
      // console.log("ahmed")
    }
    else if (infants_on_lap === 0 && value === "dec") {
      setCol("disabled")
    }
    else {
      setCol("primary")
      console.log("primary", { count })
    }
  }


  const func2 = () => {
    handleIncrement();
    iconColor("inc");
  }
  const func = () => {

    handleDecrement();
    iconColor("dec");

  }



  return (
    <div className="a4">
      <div className="counter4">
        <small>On lap       </small> <small className="small">hiiiiii</small>

        <IconButton color={col} sign="-" onClick={func} >
          <RemoveBoxRoundedIcon />
        </IconButton>
        {infants_on_lap}
        <IconButton color="primary" sign="-" onClick={func2} >
          <AddBoxRoundedIcon />
        </IconButton>
      </div>


    </div>

  );
}

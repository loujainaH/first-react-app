import React, { useState } from "react";
import '../components/Counter3.css'
import AddBoxRoundedIcon from "@material-ui/icons/AddCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import RemoveBoxRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import { SettingsCellOutlined } from "@material-ui/icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  //console.log(state.DetailsReducer.details.destination)
  return {
    infants_in_seat: state.DetailsReducer.details.infants_in_seat,
  };
};
const mapDispatchToState = (dispatch) => {
  return {

    setInfantsIS: (infants_in_seat) => {
      dispatch({ type: 'setInfantsIS', payload: infants_in_seat });
    },


  };
};
export default connect(mapStateToProps, mapDispatchToState)(Counter);


function Counter({ count, setCount, setInfantsIS, infants_in_seat }) {
  // Set the initial count state to zero, 0

  const [count2, setCount2] = useState(0);
  const [col, setCol] = useState("disabled");
  const [col2, setCol2] = useState("disabled");

  // Create handleIncrement event handler
  const handleIncrement = () => {
    if (infants_in_seat === 1) {
      // setCount(1);
      setInfantsIS(infants_in_seat + 1);
      setCol("primary")
    }

    else {
      setInfantsIS(infants_in_seat + 1);
      setCol("primary")
    }
    console.log("handleInc ", infants_in_seat)
  };



  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (infants_in_seat === 0) {
      setInfantsIS(0);
      setCol("disabled")
    }
    // if(count==1){
    //     setCol("disabled")

    // }
    else {
      setInfantsIS(infants_in_seat - 1);
    }
  };


  const iconColor = (value) => {
    if (infants_in_seat + 1 === 0) {
      setCol("disabled")
      console.log("disabled", { infants_in_seat })
    }
    if (infants_in_seat == 1 && value === "dec") {
      setCol("disabled")
      // console.log("ahmed")
    }
    else if (infants_in_seat === 0 && value === "dec") {
      setCol("disabled")
    }
    else {
      setCol("primary")
      console.log("primary", { infants_in_seat })
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
    <div className="a3">
      <div className="counter3">
        <small>In seat       </small> <small className="small">hiiiiii</small>
        <IconButton color={col} sign="-" onClick={func} >
          <RemoveBoxRoundedIcon />
        </IconButton>
        {infants_in_seat}
        <IconButton color="primary" sign="-" onClick={func2} >
          <AddBoxRoundedIcon />
        </IconButton>
      </div>

      {/* <div className="counter2">
<IconButton color={col2} sign="-"  onClick={funcb} >
  <RemoveBoxRoundedIcon />
</IconButton>
  <h5>{count2}</h5>
  <IconButton color="primary" sign="-"   onClick={funca} >
  <AddBoxRoundedIcon />
</IconButton>
</div> */}

    </div>

  );
}

import React, { useState } from "react";
import '../components/Counter.css'
import AddBoxRoundedIcon from "@material-ui/icons/AddCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import RemoveBoxRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import { SettingsCellOutlined } from "@material-ui/icons";
function Counter({ count, setCount }) {
  // Set the initial count state to zero, 0

  const [count2, setCount2] = useState(0);
  const [col, setCol] = useState("disabled");
  const [col2, setCol2] = useState("disabled");

  // Create handleIncrement event handler
  const handleIncrement = () => {
    if (count === 1) {
      // setCount(1);
      setCount(count => count + 1);
      setCol("primary")
    }

    else {
      setCount(count => count + 1);
      setCol("primary")
    }
    console.log("handleInc ", count)
  };

  const handleIncrement2 = () => {
    if (count2 === 1) {
      // setCount(1);
      setCount2(count2 => count2 + 1);
      setCol2("primary")
    }

    else {
      setCount2(count2 => count2 + 1);
      setCol("primary")
    }
    console.log("handleInc2 ", count2)
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (count === 0) {
      setCount(0);
      setCol("disabled")
    }
    // if(count==1){
    //     setCol("disabled")

    // }
    else {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleDecrement2 = () => {
    if (count2 === 0) {
      setCount2(0);
      setCol2("disabled")
    }
    // if(count==1){
    //     setCol("disabled")

    // }
    else {
      setCount2(prevCount2 => prevCount2 - 1);
    }
  };
  const iconColor = (value) => {
    if (count + 1 === 0) {
      setCol("disabled")
      console.log("disabled", { count })
    }
    if (count == 1 && value === "dec") {
      setCol("disabled")
      // console.log("ahmed")
    }
    else if (count === 0 && value === "dec") {
      setCol("disabled")
    }
    else {
      setCol("primary")
      console.log("primary", { count })
    }
  }

  const iconColor2 = (value) => {
    if (count2 + 1 === 0) {
      setCol2("disabled")
      console.log("disabled", { count2 })
    }
    if (count2 == 1 && value === "dec") {
      setCol2("disabled")
      // console.log("ahmed")
    }
    else if (count2 === 0 && value === "dec") {
      setCol2("disabled")
    }
    else {
      setCol2("primary")
      console.log("primary", { count2 })
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


  const funca = () => {
    handleIncrement2();
    iconColor2("inc");
  }
  const funcb = () => {

    handleDecrement2();
    iconColor2("dec");

  }
  return (
    <div className="b">
      <div className="counter">
        Aged +18    <small className="small"></small>
        <IconButton color={col} sign="-" onClick={func} >
          <RemoveBoxRoundedIcon />
        </IconButton>
        {count}
        <IconButton color="primary" sign="-" onClick={func2} >
          <AddBoxRoundedIcon />
        </IconButton>
      </div>


    </div>


  );
}

export default Counter;
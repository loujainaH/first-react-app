
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormatAlignRight, Height } from '@material-ui/icons';
import warning from '../images/Warning.png';
import { Paper } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
// const useStyles = makeStyles((theme)=> {
//   root: {
//     width:"80%",
//     height:"20%",
//     // marginLeft:"10%",
//     // marginTop:"3%",
//     display:"flex",
//     flexDirection:"column",
//     alignContent:"flex-start",
//     margin: theme.spacing(-2),

//   },

//   title: {
//     fontSize: 20,
//     textAlign:"left"

//   },
//   pos: {
//     marginBottom: 12,
//   },
//   image:{
//       marginLeft:"0%",
//       marginTop:"10px",
//       alignItems:"flex-start"


//   }
// });
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    height: "20%",
    marginLeft: "16%",
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    margin: theme.spacing(-2),


  },
  title: {
    fontSize: 20,
    marginLeft: "-70%",
    marginTop: "-4%",


  },
  paper: {
    marginRight: theme.spacing(2),
    width: "65%",
    marginLeft: "16%",
    marginTop: "5%",

    //   height: "10%",
    //   height: "300px",
    // overflow: "hidden",
    // // overflowy: "auto",
    // overflow: 'auto'

    boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
    borderradius: 3,

  },

  pos: {
    marginBottom: 12,
    color: "#202124",
    marginLeft: "-47%",
  },

  image: {
    // marginLeft:"0%",
    marginTop: "2%",
    marginLeft: "-92%"
    // alignItems:"left"


  },



}));

export default function SimpleCard() {
  const classes = useStyles();


  return (
    <Card className={classes.paper}>
      {/*         
        <CardMedia
          component="img"
          className={classes.image}
          alt="Contemplative Reptile"
          height="14%"
          image={warning}
          
        /> */}
      <div className={classes.image}>
        <img src={warning} alt="" />
      </div>

      <div className={classes.title}>

        <h7>Travel restricted</h7>
      </div>

      <div className={classes.pos}>
        <small>Proof of COVID-19 vaccination required before departure. </small>

      </div>



    </Card>
  );
}

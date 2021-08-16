import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import LanguageIcon from '@material-ui/icons/Language';
import { Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { Link } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop:"10%",
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  links: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
   // marginTop:"3%",
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color:"#70757A",
    fontSize: theme.typography.pxToRem(14),

   // marginTop:"3%",
    '& > *': {
      margin: theme.spacing(2),
    },
  },

  text1: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color:"#70757A",
   marginTop:"3%",
   fontSize: theme.typography.pxToRem(14),

   marginBottom:"3%",
    '& > *': {
      margin: theme.spacing(2),
    },
  },


}));

export default function OutlinedChips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
      <div>
    <div className={classes.root}>
   
      
      <Chip
        icon={<LanguageIcon/>}
        label="Language . English(United States)"
        clickable
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon="none"
        variant="outlined"
      />
      
      <Chip
        icon={<LocationOnIcon/>}
        label="Location . Egypt"
        clickable
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon="none"
        variant="outlined"
      />
      

      <Chip
        icon={<LocalAtmIcon/>}
        label="Currency . EGP"
        clickable
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon="none"
        variant="outlined"
      />


    

    </div>
    <div className={classes.links}>
        <Link>About</Link>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>Join our studies</Link>
        <Link>Feedback</Link>
        <Link>Help center</Link>
      </div>
      <div >
      <Typography className={classes.text}> Displayed currencies may differ from the currencies used to purchase flights. Learn more</Typography> 

      <Typography className={classes.text1}> Prices are final prices and include all taxes and fees, including payment fees for the cheapest common payment method (which may differ depending on the provider). Additional charges may apply for other types of payment, luggage, meals, WLAN or other additional services. Prices, availability and travel details are provided based on the latest information received from our partners. This information is reflected in the results within a period of less than 24 hours. Additional conditions may also be applied by our partners. You should then check prices and conditions with the services providers before booking.</Typography> 

      </div>
    </div>


// Displayed currencies may differ from the currencies used to purchase flights. Learn more

// Prices are final prices and include all taxes and fees, including payment fees for the cheapest common payment method (which may differ depending on the provider). Additional charges may apply for other types of payment, luggage, meals, WLAN or other additional services. Prices, availability and travel details are provided based on the latest information received from our partners. This information is reflected in the results within a period of less than 24 hours. Additional conditions may also be applied by our partners. You should then check prices and conditions with the services providers before booking.
// 70757A

// 0F56B3


);
}

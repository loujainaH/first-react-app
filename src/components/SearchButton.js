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

export default function IconLabelButtons() {
  const classes = useStyles();

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
            >
              Search
            </Button>

          </div>
        </Link>
      </ul>
    </div>
  );
}

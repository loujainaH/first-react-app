
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import '../components/DatePicker.css'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-16T21:11:54'));
  const [selectedDate1, setSelectedDate1] = React.useState(new Date('2021-08-15T21:11:54'));

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="rangeDate">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justifyContent="space-around">
    <div className="date1">
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Departure Date"
        value={selectedDate1}
        onChange={handleDateChange1}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      </div>
      <div className="date2">
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Arrival Date"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />

      </div>
      
    </Grid>
  </MuiPickersUtilsProvider>
  </div>
    
  );
}
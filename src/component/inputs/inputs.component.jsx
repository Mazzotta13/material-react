import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const Inputs = () => {
    // checkbox
    const [checked, setChecked] = React.useState(true);
    const handleChange = event => {
        setChecked(event.target.checked);
    };

    // datePicker
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = date => {
        setSelectedDate(date);
    };

    // Button 
    const disabled = '';
    return (
        <div> 
            <h1>INPUTS</h1>
            <Button variant="contained" color="primary" disabled={disabled}>
                Primary
            </Button>
            <div>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    value="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Checkbox
                    defaultChecked
                    value="secondary"
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default Inputs;
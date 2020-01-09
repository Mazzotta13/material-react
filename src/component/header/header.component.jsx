import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withRouter} from 'react-router-dom';

const Header = (props) => {
    const [value, setValue] = React.useState(0);
    const {history} = props; 

    const handleChange = (event, newValue) => {
        if (newValue === 0) {
            history.push('/header');
        } else if (newValue === 1) {
            history.push('/card');
        } else {
            history.push('/signin');
        }
        console.log(history);
        console.log(newValue);
        setValue(newValue);
      };

        return (
            <Paper >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </Paper>
        )
    
   
}
export default withRouter(Header);
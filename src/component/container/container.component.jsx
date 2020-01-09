import React from 'react';
import Header from '../header/header.component';
import {Route, Switch} from 'react-router-dom';
import Card from '../card/card.component';
import SignIn from '../sign-in/sign-in.component';

class Container extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>HomePage
                    <Route path='/card' component = {Card}/>
                    <Route path='/header' component = {Header}/>
                    <Route path='/signin' component = {SignIn}/>
                </Switch>
            </div>
        )
    }
}

export default Container;
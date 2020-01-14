import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Container from './component/container/container.component';
import TestHook from './component/test-hook/test-hook.component';

function App() {
  //const classes = useStyles();

  return (
    <div>
    <Container />
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <TestHook />
  </div>
  );
}

export default App;

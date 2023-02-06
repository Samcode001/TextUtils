// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = `#0e0d25`;
    } else {
      setmode('light');
      document.body.style.backgroundColor = `white`;
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      mssg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }
  return (
    <>
      <Router>

        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <Textform mode={mode} showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

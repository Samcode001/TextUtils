import About from "./About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0e0d25";
      showAlert("Dark Mode Enabled","success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled","success")
    }
  }

  const showAlert=(message,alertType)=>{
     setAlert({
        msg:message,
        type:alertType
       })

      setTimeout(() => {
        setAlert(null);
      }, 1800); 
  }
  return (
    <>
       <Router>
      <Navbar tittle="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
        <Route exact path="/">
        <TextForm heading="Text for Analyze" mode={mode} showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
        </Switch>
        {/* <About/> */}
        
      </div>
      </Router>
    </>

  );
}

export default App;

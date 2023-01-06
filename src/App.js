import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light")
  const [alert, setAlert] = useState(null)

  const sAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  const toggleMode = ()=>{
    if(theme === "light"){
      setTheme("dark")
      document.body.style.backgroundColor = "#4a525b"
      sAlert("Dark mode has been enabled","success")
      // document.title = "TextUtilities is amazing"
      // setInterval(() => {
      //   document.ttile = "TextUtilities - Dark mode"
      // }, 500);
    }else{
      setTheme("light")
      document.body.style.backgroundColor = "white"
      sAlert("Light mode has been enabled","success")
    }

  }
  return (
    <>
    <Router>

      {/* <Navbar title="TextUtilities" aboutText="About us" /> */}
      <Navbar title="TextUtilities" third="Contact us" mode={theme} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
        <TextForm heading="Enter text here" mode={theme} showAlert={sAlert}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let [mode,setMode] = useState("light");
  let [alert,setAlert] = useState(null);

  let toggleMode = (themeMode)=>{
    if(themeMode === "light"){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light theme has been applied!","success");
      document.title = "TextUtils - Light Theme";
    }
    else if(themeMode === "#6a1212"){
      setMode("dark");
      document.body.style.backgroundColor = '#6a1212';
      showAlert("Red theme has been applied!","success");
      document.title = "TextUtils - Red Theme";
    }
    else if(themeMode === "#054f05"){
      setMode("dark");
      document.body.style.backgroundColor = '#054f05';
      showAlert("Green theme has been applied!","success");
      document.title = "TextUtils - Green Theme";
    }
    else if(themeMode === "#101052"){
      setMode("dark");
      document.body.style.backgroundColor = '#101052';
      showAlert("Blue theme has been applied!","success");
      document.title = "TextUtils - Blue Theme";
    }
    else if(themeMode === "#4a074a"){
      setMode("dark");
      document.body.style.backgroundColor = '#4a074a';
      showAlert("Purple theme has been applied!","success");
      document.title = "TextUtils - Purple Theme";
    }
  }

  let showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container mt-3">
        {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert}/>}></Route> */}
          <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert}/>
          {/* <Route exact path="/about" element={<About />}></Route>  
        </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

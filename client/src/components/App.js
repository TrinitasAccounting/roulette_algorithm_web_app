import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import './App.css';

import Timer from "./TimerComponent/Timer";
import CodeInputForm from "./CodeInputForm";

// The correctcode to compare too
let correctCode = '12345'

function App() {

  // need to move this state out here, so we can set it to true if the code is correct
  const [accessGranted, setAccessGranted] = useState(false);

  // State to show if code is incorrect
  const [wrongCodeDiv, setWrongCodeDiv] = useState(false);



  // creating state for the user input code 
  const [formData, setFormData] = useState({
    inputCode: ''
  })

  // OnSubmit handler for the code form submission
  function handleSubmit(event) {
    event.preventDefault();



    if (formData.inputCode === correctCode) {
      setAccessGranted(!accessGranted)
      if (wrongCodeDiv === true) {
        setWrongCodeDiv(!wrongCodeDiv)
      }
    }
    else {
      setWrongCodeDiv(!wrongCodeDiv)
    }

    setFormData({
      inputCode: ''
    })

  }



  return (
    <>
      <h1 className='title-text' style={{ color: 'navy' }}>Mister Rafael's Algorithm</h1>

      <div className='center' style={{ textAlign: "center", margin: "auto" }}>
        <Timer accessGranted={accessGranted} setAccessGranted={setAccessGranted} />
        {!accessGranted ? <CodeInputForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} wrongCodeDiv={wrongCodeDiv} setWrongCodeDiv={setWrongCodeDiv} /> : <></>}

        {/* {wrongCodeDiv ? <h1 style={{ color: 'red' }}>Incorrect Code, Please Try Again</h1> : <></>} */}
      </div>

    </>
  );

}

export default App;

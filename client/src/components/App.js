import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Timer from "./TimerComponent/Timer";
import CodeInputForm from "./CodeInputForm";

function App() {

  // need to move this state out here, so we can set it to true if the code is correct
  const [accessGranted, setAccessGranted] = useState(false);

  // creating state for the user input code 
  const [formData, setFormData] = useState({
    inputCode: ''
  })

  // OnSubmit handler for the code form submission
  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData.inputCode)


  }



  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <Timer accessGranted={accessGranted} setAccessGranted={setAccessGranted} />
      <CodeInputForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </div>
  );

}

export default App;

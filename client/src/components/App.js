import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Timer from "./TimerComponent/Timer";

function App() {
  return (
    <div style={{ textAlign: "center", margin: "auto" }}>

      <Timer />
    </div>
  );

}

export default App;

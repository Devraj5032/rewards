import "./App.css";
import Home from "./Screens/home/Home"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Scan from "./Screens/scan/Scan"
import Tables from "./Screens/Tables/Tables";
import { useState } from "react";


function App() {

  const [mainData , setMainData] = useState("")

  const handleData = (e) => {
    setMainData(e)
    console.log(e);
  }

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan handleData={handleData}/>}/>
          <Route path="/tables" element={<Tables mainData={mainData}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

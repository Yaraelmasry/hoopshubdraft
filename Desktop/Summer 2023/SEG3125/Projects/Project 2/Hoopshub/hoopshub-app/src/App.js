import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Club from "./routes/Club";
import Program from"./routes/Program";
import Contact from "./routes/Contact";
import GymLocation from "./routes/GymLocation";



function App() {
  return (

      <Router>

       <div>
       <Navbar/>
       <Routes>
       <Route path='/' element = {<Home />} />
       <Route path='/club' element = {<Club />} />
       <Route path='/program' element = {<Program />} />
       <Route path='/contact' element = {<Contact />} />
       <Route path='/gymlocation' element = {<GymLocation />} />
      

  

       </Routes>

    </div>
    </Router>
  );
}

export default App;

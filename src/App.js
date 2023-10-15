/* import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicleList from './components/VehicleList';
import Create from './components/Create'; */
import "./App.css";
import { Auth } from "./components/auth";
  
function App() {

return <div className="App">
  <Auth/>
  </div>;
 
/*   return (
    <Router>
      <Routes>
      <Route path="/" element={<VehicleList />} />
      <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  ); */
}


 
export default App;
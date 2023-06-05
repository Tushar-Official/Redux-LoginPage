import React from 'react'
import './App.css';
import { Create } from './Components/Create';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {Data} from './Components/Data'



function App() {
 
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/" element={<Create/>} />
    <Route path="/data" element={<Data/>}/>
    
    </Routes>
    </Router>
    </div>
  );
}

export default App;

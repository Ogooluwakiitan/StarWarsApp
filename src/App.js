import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetApi from './components/GetApi';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<GetApi/>}/>
      </Routes> 
  </BrowserRouter>
    // <div className='app'>
    //   <Logo />
    //   <GetApi />
    // </div>
  );
}

export default App;

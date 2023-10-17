import './App.css';
import Navbar from './Components/Navbar';
import ChatBot from './Components/ChatBot';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0)
  return (<BrowserRouter>
    <Navbar/>
   <LoadingBar
        color='#f11946'
        progress={progress}
      />
    
    <div className="container">
      <Routes>
        <Route exact path='/' element={<ChatBot setProgress={setProgress}/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>



  );
}

export default App;

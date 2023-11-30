import './App.css';
import NavBar from './components/NavBar'
import React, { useState, Component } from 'react'
import "tailwindcss/tailwind.css";
import CardHolder from './components/CardHolder'
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {
 let apiKey=process.env.REACT_APP_NEWS_API
 
  const [progress, setProgress] = useState(0);

    return (
      <BrowserRouter basename='/ScoNews'>
       <div >
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Routes>
            <Route path="/"  element={<CardHolder apiKey={apiKey} country='in' category='general' setProgress={setProgress}/>} />
        </Routes>
        <Routes>
            <Route path="/business"  element={<CardHolder apiKey={ apiKey} country='in' category='business' setProgress={setProgress}/>} />
        </Routes>
        <Routes>
           <Route path="/entertainment"  element={<CardHolder apiKey={ apiKey} country='in' category='entertainment' setProgress={setProgress}/>}/>
        </Routes>
        <Routes>
           <Route path="/health"  element={<CardHolder apiKey={ apiKey} country='in' category='health' setProgress={setProgress}/>}/>
        </Routes>
        <Routes>
            <Route path="/science" element={<CardHolder apiKey={ apiKey} country='in' category='science' setProgress={setProgress}/>} />
        </Routes>
        <Routes>
            <Route path="/sports"  element={<CardHolder apiKey={ apiKey} country='in' category='sports' setProgress={setProgress}/>}/>
        </Routes>
        <Routes>
            <Route path="/technology" element={<CardHolder apiKey={ apiKey} country='in' category='technology'setProgress={setProgress}/>} />
        </Routes>
       </div>
    </BrowserRouter>
  )
}

export default App;
 
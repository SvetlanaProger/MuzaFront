import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import Adress from "./components/adress/Adress";
import Schedule from "./components/schedule/Schedule";
import Direction from "./components/direction/Direction";
import ReviewPage from "./components/review/ReviewPage";
import PageTracker from "./components/PageTracker";

function App() {
  return (
    <Router>
        <Header />
        <Body>
            <PageTracker />
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />}/>
                <Route path='/adress' element={<Adress />}/>
                <Route path='/schedule' element={<Schedule />}/>
                <Route path='/direction' element={<Direction />}/>
                <Route path='/review' element={<ReviewPage />}/>
            </Routes>
        </Body>
    </Router>
  );
}

export default App;

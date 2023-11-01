import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import MainPage from './pages/main'
import NavBar from "./components/navBar";
import CardGamesApp from './pages/CardGamesApp'
import WeatherApp from "./pages/WeatherApp";
import TodoApp from "./pages/TodoApp";
import EComm from "./pages/EComm";
import Games from "./pages/Games";
import PunkIPA from "./pages/PunkIPA";
import Util from "./pages/Util";
import TechDogPPT from "./pages/TechDogBlogppt";
import Assignments from "./pages/Assignments";

function App() {
  return (
    <div>
      <BrowserRouter>      
        <div>        
        <NavBar />
        <Routes>
        <Route
        path='/'
        element={<MainPage />}
        />
        <Route
        path='/CardGamesApp'
        element={<CardGamesApp />}
        />
        <Route
        path='/HomePage'
        element={<HomePage />}
        />
        <Route
        path='/WeatherApp'
        element={<WeatherApp />}
        />
        <Route
        path='/TodoApp'
        element={<TodoApp />}
        />
        <Route
        path='/EComm'
        element={<EComm />}
        />
        <Route
        path='/PunkIPA'
        element={<PunkIPA />}
        />
        <Route
        path='/Util'
        element={<Util />}
        />
         <Route
        path='/Games'
        element={<Games />}
        />
        <Route
        path='/TechDogBlogPPT'
        element={<TechDogPPT />}
        />
         <Route
        path='/Assignments/:id'
        element={<Assignments />}
        />
         </ Routes>
         
        </div>
        </BrowserRouter>

    </div>
);
}

export default App;

const HomePage = ()  => {
  window.location.replace('https://camelcode.co.uk')
return null
}


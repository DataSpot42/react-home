import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import MainPage from './pages/main'
import NavBar from "./components/navBar";
import CardGamesApp from './pages/CardGamesApp'
import WeatherApp from "./pages/WeatherApp";
import TodoApp from "./pages/TodoApp";

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


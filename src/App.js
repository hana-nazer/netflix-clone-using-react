import React from "react";
import NavBar from "./components/navBar/NavBar";
import './App.css'
import {originals,action} from './urls'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <Banner></Banner>
    <RowPost url={originals} title='Netflix originals'></RowPost>
    <RowPost url={action} title='Action' isSmall></RowPost>
    </div>
  );
}

export default App;

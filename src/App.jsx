import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainBlock from "./components/MainBlock/MainBlock";
import MySkillsBlock from "./components/MySkillsBlock/MySkillsBlock";
import MyProjects from "./components/MyProjects/MyProjects";
import DistanceJob from "./components/DistanceJob/DistanceJob";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainBlock/>
      <MySkillsBlock/>
      <MyProjects/>
      <DistanceJob/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;

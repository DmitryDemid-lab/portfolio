import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainBlock from "./components/MainBlock/MainBlock";
import MySkillsBlock from "./components/MySkillsBlock/MySkillsBlock";
import MyProjects from "./components/MyProjects/MyProjects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainBlock/>
      <MySkillsBlock/>
      <MyProjects/>
      <Resume/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;

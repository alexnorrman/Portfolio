import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import NotFound from "./components/NotFound";

import Fjallstugan from "./components/projects/Fjallstugan";
import Eatable from "./components/projects/Eatable";
import WhereIsTheStore from "./components/projects/WhereIsTheStore";
import KomITid from "./components/projects/KomITid";
import PersonalObject from "./components/projects/PersonalObject";
import ActReact from "./components/projects/ActReact";
import DIRedesign from "./components/projects/DIRedesign";
import IdagInatt from "./components/projects/IdagInatt";
import MasterThesis from "./components/projects/MasterThesis";





function App(props) { 

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" exact component={Home}/>
          <Route path="/projects/fjallstugan" component={Fjallstugan}/>
          <Route path="/projects/idag-och-inatt" component={IdagInatt}/>
          <Route path="/projects/master-thesis" component={MasterThesis}/>
          <Route path="/projects/eatable" component={Eatable}/>
          <Route path="/projects/where-is-the-store" component={WhereIsTheStore}/>
          <Route path="/projects/kom-i-tid" component={KomITid}/>
          <Route path="/projects/di-redesign" component={DIRedesign}/>
          <Route path="/projects/a-personal-object" component={PersonalObject}/>
          <Route path="/projects/action-and-reaction" component={ActReact}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

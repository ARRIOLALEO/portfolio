import React, {  Component } from 'react';
import ReactDOM from 'react-dom';
import Hero from './layouts/hero'
import Skill from './layouts/skills';
import Projects from './layouts/projects';
import Footer from './layouts/footer';
class App extends Component{
  render(){
    return(
      <>
        <Hero />
        <Skill/>
        <Projects/>
        <Footer/>
      </>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));

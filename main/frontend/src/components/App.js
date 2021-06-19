import React, {  Component } from 'react';
import ReactDOM from 'react-dom';
import Hero from './layouts/hero'
import Skill from './layouts/skills';
import Projects from './layouts/projects';
class App extends Component{
  fromAPI = fetch("http://127.0.0.1:8000/api/projects/")
    .then(response=>response.json())
    .then(data=>console.log(data))
  render(){
    return(
      <>
        <Hero />
        <Projects/>
      </>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));

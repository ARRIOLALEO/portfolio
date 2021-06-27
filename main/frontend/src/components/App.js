import React, {  Component } from 'react';
import ReactDOM from 'react-dom';
import Hero from './layouts/hero'
import Skill from './layouts/skills';
import Projects from './layouts/projects';
import Footer from './layouts/footer';
import Menu from './layouts/menu';
import PostMain from './layouts/blogmain';
class App extends Component{
  render(){
    return(
      <>
        <Menu/>
        <Hero />
        <Skill/>
        <Projects/>
        <PostMain toShowPosts="2"/>
        <Footer/>
      </>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));

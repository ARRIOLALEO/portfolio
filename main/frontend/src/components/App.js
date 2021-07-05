import React, {  Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';
import Index from './mainpage/index';
import Menu from './layouts/menu';
import Footer from './layouts/footer';
import Timeline from './timeline/timeline';
class App extends Component{
  render(){
    return(
      <Router>
      <>
        <Menu/>
        <Switch>
          <Route exact  path="/">
            <Index/>
          </Route>
          <Route path="/timeline">
            <Timeline/>
          </Route>
          </Switch>
        <Footer/>
      </>
        </Router>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));

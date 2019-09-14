import React from 'react';
import './style.scss'
import Input from './components/Input'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Post from './components/Post'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path="/:post_id" component={Post}/>
            </Switch>
        </BrowserRouter>
        <Input/>
    </div>
  );
}

export default App;

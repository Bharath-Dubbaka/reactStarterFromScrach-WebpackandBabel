import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import Navbar from './components/Navbar';

const App = () => {
        return (
          <BrowserRouter>
          <div className='App'>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/privacypolicy' component={PrivacyPolicy}/>
            </Switch>
          </div>
          </BrowserRouter>
          
        )}


export default App
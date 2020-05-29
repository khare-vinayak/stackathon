import React,{Component} from 'react'
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';

import CurrencySparklineChart from './CurrencySparklineChart';


class App extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
   
  }
  
  render(){
return (
      <HashRouter>
        <h1> Crypto Currency Dashboard</h1>
        <Route component={Nav} />
        <Route  exact path='/' component={Home} />
        <Route  exact path='/:interval' component={Home} />
        <Route  exact path='/currency/:id' component={CurrencySparklineChart  } />
       </HashRouter>
    );
  }
};


export default App

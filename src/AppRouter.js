import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { home } from './home';
import PrimerPagina from './PrimerPagina';





export const AppRouter = () => {
    return (
        <Router>
        <div>
          
    
          <Switch>
           <Route exact path ="/home" component={home}/>
           <Route path ="/" component={PrimerPagina}/>
          </Switch>
        </div>
      
    </Router>
    )
}

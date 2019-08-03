import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';


import Layout from './Pages/Layout/Layout';
import Porfolio from './Pages/Portfolio/Portfolio';
import MusicMaster from './Components/Projects/music-master/MusicMaster';
import EvensOrOdds from './Components/Projects/evens-or-odds/index';
import Reaction from './Components/Projects/Reaction/App';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={()=><Layout> <Porfolio/> </Layout>} /> 
        <Route exact path='/music-master' render={()=><Layout> <MusicMaster/> </Layout>} /> 
        <Route exact path='/evens-or-odds' render={()=><Layout> <EvensOrOdds/> </Layout>} />
        <Route exact path='/reaction' render={()=><Layout> <Reaction/> </Layout>} />
        
      </Switch>
  
    </div>
  );
}

export default App;

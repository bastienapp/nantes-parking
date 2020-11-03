import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ParkingCard from './components/ParkingCard';
import ParkingList from './components/ParkingList';

const testParking = {
  grp_complet: 10,
  grp_identifiant: '001',
  grp_horodatage: '2020-11-03T14:11:46+00:00',
  grp_disponible: 333,
  idobj: '4320',
  location: [47.214075295, -1.552558781],
  grp_statut: 5,
  grp_exploitation: 495,
  grp_nom: 'Feydeau',
};

function App() {
  return (
    <div className="App">
      <ParkingList />

      <Router>
        <Switch>
          <Route path="/parking">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <ParkingCard {...testParking} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

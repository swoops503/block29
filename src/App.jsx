import React from 'react';
import { PlayerList } from './components/PlayerList'; 
import { SeeDetails } from './components/SeeDetails';
import { PlayerForm } from './components/PlayerForm'; 

export function App() {
  return (
    <div>
      <PlayerList />
      <SeeDetails />
      <PlayerForm /> 
    </div>
  );
}

export default App;

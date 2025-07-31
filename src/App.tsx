import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MantineProvider } from '@mantine/core';
// import { AquaButton } from './components/AquaButton'; // Adjust the import path as necessary
import AquaButton from './components/AquaButton';
function App() {
  return (
    <MantineProvider>
    <div className="App">
      <AquaButton/>
    </div> 
    </MantineProvider>
  );
}

export default App;

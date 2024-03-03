import React from 'react';
import './App.css';
import Menu from './components/Menu';
import TablaGrupoA from './components/TablaGrupoA';
import TablaGrupoB from './components/TablaGrupoB';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="container">
        <br></br>
        <h1 className="mt-5">Torneo de fútbol 11</h1>
        <TablaGrupoA />
        <TablaGrupoB />
      </div>
    </div>
  );
}

export default App;

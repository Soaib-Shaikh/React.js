import React from 'react'

import './App.css'
import Uncontrolled from './components/Uncontrolled';
import Controlled from './components/Controlled';

const App = () => {
  return (
    <> 
    <div className="container mt-5"> 
      <h1 className="text-center mb-4">Controlled vs Uncontrolled Forms</h1>

      <div className="row g-4">

        
        <div className="col-md-6">
          <div className="p-4 shadow rounded bg-light">
            <Uncontrolled />
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 shadow rounded bg-light">
            <Controlled />
          </div>
        </div>

      </div>
    </div>
    </>


  );
}

export default App;

import React from 'react';
import './App.css';

import Sidebar from "./components/Sidebar/Sidebar"
import Landing from "./components/pages/Landing/Landing"
import { Route } from 'react-router-dom';

function App() {
  return (
    <div id="appRoot">
      <Sidebar />
      <Route to="/" component={Landing} />
    </div>
  );
}

export default App;

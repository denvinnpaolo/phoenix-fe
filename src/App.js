import './App.css';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import Private from './Private.js'
import Dashboard from './components/dashboard/index.js'

import { AppContainer } from './styles/Styles.js';
import Nav from './components/dashboard/nav/Nav.js'


function App() {

  return (
      <div>
        <Private path="/" component={Dashboard} />
      </div>
  );
}

export default App;

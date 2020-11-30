import './App.css';
import { Route } from 'react-router-dom';

import Private from './Private.js'
import Dashboard from './components/dashboard/index.js'

import { AppContainer } from './styles/Styles.js';
import Nav from './components/dashboard/nav/Nav.js'


function App() {
  return (
      <Private path="/" component={Dashboard} />
  );
}

export default App;

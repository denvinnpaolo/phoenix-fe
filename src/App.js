import { Route } from 'react-router-dom';
import './App.css';

import Private from './Private.js'
import Dashboard from './components/dashboard/index.js'

import { AppContainer } from './styles/Styles.js';


import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  return (
    <AppContainer>
      <Private exact path="/" component={Dashboard} />


    </AppContainer>
  );
}

export default App;

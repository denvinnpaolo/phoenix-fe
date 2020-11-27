import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/dashboard/nav/Nav.js'
import SignUp from './components/landing/signup/SignUp.js'
import { AppContainer } from './styles/Styles.js';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  return (
    <AppContainer>
      <Route exact path="/" component={SignUp}/>
      <Nav />
    </AppContainer>
  );
}

export default App;

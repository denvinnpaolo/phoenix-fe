import logo from './logo.svg';
import './App.css';
import Nav from './components/dashboard/nav/Nav.js'
import SignUp from './components/landing/signup/SignUp.js'
import { AppContainer } from './styles/Styles.js';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  return (
    <AppContainer>
      <Nav />
    </AppContainer>
  );
}

export default App;

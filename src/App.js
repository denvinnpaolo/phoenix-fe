import logo from './logo.svg';
import './App.css';
import Nav from './components/dashboard/nav/Nav.js'
import SignUp from './components/landing/signup/SignUp.js'
import { AppContainer } from './styles/Styles.js';

function App() {
  return (
    <AppContainer>
      <SignUp />
    </AppContainer>
  );
}

export default App;

import './App.css';

import Private from './Private.js'
import Dashboard from './components/dashboard/index.js'

import { AppContainer } from './styles/Styles.js';


function App() {
  return (
    <AppContainer>
      <Private path="/" component={Dashboard} />
    </AppContainer>
  );
}

export default App;

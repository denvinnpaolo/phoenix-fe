import './App.css';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Private from './Private.js'
import Dashboard from './components/dashboard/index.js'

import LandingPage from './components/landing';


function App() {
  const {loggedIn} = useSelector(state => state.users)
  return (
      <div>
        {loggedIn? <Redirect push to="/"/> : <Route path="/" component={LandingPage} />}
        <Private exact path="/" component={Dashboard} />
      </div>
  );
}

export default App;

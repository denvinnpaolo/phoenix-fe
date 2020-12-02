import './App.css';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Private from './Private.js'
import Dashboard from './components/dashboard/index.js'



function App() {
  const {loggedIn} = useSelector(state => state.users)
  return (
      <div>
        <Private path="/" component={Dashboard} />

      </div>
  );
}

export default App;

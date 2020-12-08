import './App.css';
import Private from './Private.js'
import Dashboard from './components/dashboard/index.js'
import AllRequest from './components/dashboard/requests/all/AllRequest'
import Nav from './components/dashboard/nav/Nav.js'
import { useSelector } from 'react-redux';
import Home from './components/dashboard/home/Home';



function App() {
  const {loggedIn} = useSelector(state => state.users)
  return (
        <Private path="/" component={Dashboard} />
  );
}

export default App;

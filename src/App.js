import './App.css';
import Private from './Private.js'
import Dashboard from './components/dashboard/index.js'
import { useSelector } from 'react-redux';




function App() {
  const {loggedIn} = useSelector(state => state.users)
  return (
        <Private path="/" component={Dashboard} />
  );
}

export default App;

import './App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './screens/Home/Home'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/'>
<Home />
        </Route>
      </Switch>
</Layout>
    
  );
}

export default App;

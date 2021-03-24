import './App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Projects from './screens/Projects/Projects'
import Contact from './screens/Contact/Contact'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/about'>
<About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/'>
<Home />
        </Route>
      </Switch>
</Layout>
    
  );
}

export default App;

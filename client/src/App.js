import './App.css'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Navbar from './components/Navbar'
function App() {
  return (
    <div class="text-6xl">
      <Navbar />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  )
}

export default App

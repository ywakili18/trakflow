import './App.css'
import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Loginform from './components/Loginform'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import { CheckSession } from './services/Auth'
import ProtectedRoute from './components/ProtectedRoute'
import Editticketpage from './pages/Editticketpage'
import { motion, AnimatePresence } from 'framer-motion'
function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  const checkToken = async () => {
    //If a token exists, sends token to localstorage to persist logged in user
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', duration: 3 }}
        className="text-6xl"
      >
        <Navbar
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/register" component={Register} />
          {user && authenticated && (
            <ProtectedRoute
              authenticated={authenticated}
              user={user}
              path="/dashboard"
              component={Dashboard}
            />
          )}
          {user && authenticated && (
            <ProtectedRoute
              authenticated={authenticated}
              user={user}
              path="/tickets/:ticketId"
              component={Editticketpage}
            />
          )}
          <Route
            path="/"
            component={(props) => (
              <Loginform
                {...props}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            )}
          />
        </Switch>
      </motion.div>
    </AnimatePresence>
  )
}

export default App

import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const ProtectedRoute = ({
  user,
  authenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user && authenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default connect(mapStateToProps)(ProtectedRoute)

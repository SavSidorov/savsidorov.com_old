import React from 'react'
import { Redirect } from 'react-router-dom'

class PrivateRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = localStorage.getItem('password');
    console.log(isAuthenticated)
  
    return isAuthenticated === 'localism' ? (
        <Component />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
    );
  }
}

export default PrivateRoute;
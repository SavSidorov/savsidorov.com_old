import React from 'react'
import { Redirect } from 'react-router-dom'
import data from "../password.json"

class PrivateRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const input = localStorage.getItem('password');
  
    return input === data.password ? (
        <Component />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
    );
  }
}

export default PrivateRoute;
import {Component} from 'react'

import './index.css'

class Login extends Component {
  render() {
    const {onClick} = this.props
    return (
      <button className="btn" onClick={onClick}>
        Login
      </button>
    )
  }
}

export default Login

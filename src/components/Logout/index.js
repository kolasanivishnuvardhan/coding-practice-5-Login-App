import {Component} from 'react'

import './index.css'

class Logout extends Component {
  render() {
    const {onClick} = this.props
    return <button className="btn" onClick={onClick}>Logout</button>
  }
}

export default Logout

import {Component} from 'react'

import './index.css'

class Message extends Component {
  render() {
    const {isLogin} = this.props
    console.log(isLogin)
    return <h1 className="heading">{isLogin?"Welcome User":"Please Login"}</h1>
  }
}

export default Message

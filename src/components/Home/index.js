import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onLoginBtn = () => {
    console.log('btn clicked')
    this.setState(prevState => {
      console.log(!prevState.isLoggedIn)
      return {isLoggedIn: !prevState.isLoggedIn}
    })
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="login-container">
          <Message isLogin={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClick={this.onLoginBtn} />
          ) : (
            <Login onClick={this.onLoginBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home

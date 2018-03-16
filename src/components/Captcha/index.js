import React from 'react'

import logo from './logo_lega.png'

import './index.css'
import './spinner.css'

class Captcha extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    const _self = this

    this.setState({
      clicked: true
    })

    setTimeout(function () {
      _self.setState({
        timeout: true
      })
      setTimeout(function () {
        window.location.href = 'https://www.movimento5stelle.it/'
      }, 1000);
    }, 3000);
  }

  render() {
    return (
      <div className='captcha'>
        <div className='cols'>
          {(this.state.clicked) ? (
            <span className={((this.state.timeout) ? 'timeout' : '') + ' spinner-container'}>
              <i className='material-icons'>done</i>
              <span className='spinner-element'>
                <svg className="spinner" width="22px" height="22px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                  <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
              </span>
            </span>
          ) : (
            <span className='checkbox' onClick={this.handleClick}></span>
          )}
          <span>Non sono uno straniero</span>
        </div>
        <div className='cols'>
          <div className='logo'>
            <img src={logo} />
          </div>
          <div className='name'>
            leGaptcha
          </div>
        </div>
      </div>
    )
  }
}

export default Captcha

import React, { Component } from 'react'
import '../styles/Socials.css'
class Socials extends Component {
  render() {
    return (
      <div className="socials">
        <div className="facebook">
            <a href="https://www.facebook.com/jakub.homa97">
                <img src='./images/facebook-logo.png' alt="facebook"/>
            </a>
        </div>
        <div className="instagram">
        <a href="https://www.facebook.com/jakub.homa97">
                <img src='./images/instagram-logo.png' alt="instagram"/>
            </a>
        </div>
      </div>
    )
  }
}
export default Socials;

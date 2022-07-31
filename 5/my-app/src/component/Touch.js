import React from 'react'
import '../style/style.css'
import '../style/mobile.css'

class Touch extends React.Component{
  render(){
    return(
      <div className="b-touch">
        <h1>
          Get in touch.Stay in touch.
        </h1>
        <div className="m-touch_1">
          <span><i class="fas fa-headset"></i><p>24 / 7 Support</p></span>
          <span><i class="fas fa-clipboard-list"></i><p>Spotter Blog</p></span>
          <span><i class="fas fa-comments"></i><p>Community</p></span>
          <span><i class="fas fa-mobile"></i><p>Live Chat</p></span>
        </div>
        <div className="m-touch_2">
          <h1>Subscribe to our newsletter</h1>
          <input type="text" placeholder="Email Address Here..."></input>
          <input type="submit" value="Subscribe"></input>
        </div>
      </div>
    );
  }
}

export default Touch;
import React from 'react'
import '../style/style.css'
import '../style/mobile.css'
import Bot from '../img/Spotter Bot.png'

class Robot extends React.Component {
  render(){
    return(
      <div className="b-bot">
        <div className="m-bot_1">
          <h1>The best robot in trading world</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Erat velit scelerisque in dictum. Nunc vel risus commodo viverra maecenas accumsan. 
            Bibendum enim facilisis gravida neque.
          </p>
          <span>Watch Video</span>
        </div>
        <div className="m-bot_2">
          <img src={Bot} alt="bot"></img>
        </div>
      </div>
    );
  }
}

export default Robot;
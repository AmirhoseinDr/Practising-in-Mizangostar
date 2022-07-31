import React from 'react'
import '../style/style.css'
import '../style/mobile.css'


class TimeFrame extends React.Component{
  render(){
    return(
      <div className="b-frame">
        <div className="m-frame">
          <div className="s-frame_1">
            <p>Per</p>
            <p><i class="fab fa-bitcoin"></i><span>BNB </span><span>BNB / </span><i class="fab fa-bitcoin"></i><span>BTC </span><span>Bitcoin</span></p>
            <p><i class="fab fa-bitcoin"></i><span>BTC </span><span>Bitcoin / </span><i class="fab fa-bitcoin"></i><span>ETH </span><span>Ethereum</span></p>
            <p><i class="fab fa-bitcoin"></i><span>ETH </span><span>Ethereum / </span><i class="fab fa-bitcoin"></i><span>BTC </span><span>Bitcoin</span></p>
            <p><i class="fab fa-bitcoin"></i><span>CHZ </span><span>Chiliz / </span><i class="fab fa-bitcoin"></i><span>ETH </span><span>Ethereum</span></p>
            <p><i class="fab fa-bitcoin"></i><span>FIL </span><span>Filecoin / </span><i class="fab fa-bitcoin"></i><span>BTC </span><span>Bitcoin</span></p>
            <p><i class="fab fa-bitcoin"></i><span>ADA </span><span>Cardano / </span><i class="fab fa-bitcoin"></i><span>ETH </span><span>Ethereum</span></p>
          </div>
          <div className="s-frame_2">
            <p>Time Frame</p>
            <p>15 Minute</p>
            <p>15 Minute</p>
            <p>15 Minute</p>
            <p>15 Minute</p>
            <p>15 Minute</p>
            <p>15 Minute</p>
          </div>
          <div className="s-frame_3">
            <p>Strategy</p>
            <p>Strategy Name</p>
            <p>Strategy Name</p>
            <p>Strategy Name</p>
            <p>Strategy Name</p>
            <p>Strategy Name</p>
            <p>Strategy Name</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeFrame;
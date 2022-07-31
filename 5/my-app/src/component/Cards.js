import React from 'react'
import '../style/style.css'
import '../style/mobile.css'

class Cards extends React.Component{
  render(){
    return(
      <div className="b-card"> 
        <h1>Plans for every level of ambition</h1>
        <div className="m-card_1">
          <div className="m-card_1--one">
            <h1>Basic</h1>
            <p>pretium quam vulputate dignissim suspendisse in est ante in nibh</p>
            <span>$</span><span>14.95</span><span> USD / Month</span>
            <h3>Key benefits of standard:</h3>
            <p>5 indicators per chart</p>
            <p>2 charts in one window</p>
            <p>20 server-side alerts</p>
            <p>Ad-free</p>
            <p>Volume profile indicators</p>
            <p>Custom time intervals</p>
            <p>Multiple enhanced watchlists</p>
            <p>Bar replay on intraday bars</p>
            <span>Play Now</span>
          </div>
          <div className="m-card_1--two">
            <h1>Pro</h1>
            <p>pretium quam vulputate dignissim suspendisse in est ante in nibh</p>
            <span>$</span><span>84.95</span><span> USD / Month</span>
            <h3>Key benefits of standard:</h3>
            <p>5 indicators per chart</p>
            <p>2 charts in one window</p>
            <p>20 server-side alerts</p>
            <p>Ad-free</p>
            <p>Volume profile indicators</p>
            <p>Custom time intervals</p>
            <p>Multiple enhanced watchlists</p>
            <p>Bar replay on intraday bars</p>
            <span>Play Now</span>
          </div>
        </div>
        <div className="m-card_2">
          <h1>Standard</h1>
          <p>pretium quam vulputate dignissim suspendisse in est ante in nibh</p>
          <span>$</span><span>34.95</span><span> USD / Month</span>
          <h2>Key benefits of standard:</h2>
          <p>10 indicators per chart</p>
          <p>4 charts in one layout</p>
          <p>100 server-side alerts</p>
          <p>2 devices at the same time</p>
          <p>intraday exotic charts</p>
          <p>Charts based on castom formulas</p>
          <p>Chart data export</p>
          <p>Indicators on indicators</p>
          <span>Play Now</span>
        </div>
      </div>
    );
  }
}

export default Cards;
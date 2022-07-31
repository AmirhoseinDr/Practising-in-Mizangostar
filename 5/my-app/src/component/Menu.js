import React from 'react'
import Register from './Register'
import '../style/style.css'
import '../style/mobile.css'
import logo from '../img/logo.png'
import Price from '../img/price.png' 
import PriceMo from '../img/price_M.png'

class Menu extends React.Component{
  render(){
    return(
      <div className="b-container">
        <div className="m-container-r">
          <i class="fas fa-bars"></i>
          <img src={logo} alt='logo'/>
          <i class="fas fa-user-circle"></i>
        </div>
        <div className="m-container">
          <img src={logo} alt='logo'/>
          <div>
            <ul className="m-menu">
              <li>Chart</li>
              <li>Trade</li>
              <li>Markets</li>
              <li>Screeners</li>
              <li>Community</li>
              <li>English</li>
              <span><i class="fas fa-angle-down"></i></span>
            </ul>
          </div>
          <div className="b-user">
            <span>Login</span>
            <span>Register</span>
          </div>
        </div>
        <div>
          <Register/>
        </div>
        <div className="b-price">
          <img src={Price} alt='price'/>
          <img src={PriceMo} alt='price'/>
        </div>
      </div>
      
    );
  }
}

export default Menu;
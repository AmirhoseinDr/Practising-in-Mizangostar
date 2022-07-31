import React from 'react'
import '../style/style.css'
import '../style/mobile.css'
import logo from '../img/logo-black.png'





class Footer extends React.Component{
  render(){
    return(
      <div className="b-footer">
        <div className="m-footer_1">
          <img src={logo} alt="logo"></img>
          <p>Stay whit us.</p>
          <i class="fab fa-youtube-square"></i>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram-square"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-telegram"></i>
          <i class="fab fa-whatsapp-square"></i>
        </div>
        <div>
          <h2>Title 1</h2>
          <p>subtitle 1</p>
          <p>subtitle 2</p>
          <p>subtitle 3</p>
          <p>subtitle 4</p>
          <p>subtitle 5</p>
          <p>subtitle 6</p>
          <p>subtitle 7</p>
        </div>
        <i class="fas fa-minus"></i><i class="fas fa-plus"></i>
        <div>
          <h2>Title 2</h2>
          <p>subtitle 1</p>
          <p>subtitle 2</p>
          <p>subtitle 3</p>
          <p>subtitle 4</p>
          <p>subtitle 5</p>
          <p>subtitle 6</p>
          <p>subtitle 7</p>
        </div>
        <i class="fas fa-minus"></i><i class="fas fa-plus"></i>
        <div>
          <h2>Title 3</h2>
          <p>subtitle 1</p>
          <p>subtitle 2</p>
          <p>subtitle 3</p>
          <p>subtitle 4</p>
          <p>subtitle 5</p>
          <p>subtitle 6</p>
          <p>subtitle 7</p>
        </div>
        <i class="fas fa-minus"></i><i class="fas fa-plus"></i>
        <div>
          <h2>Title 4</h2>
          <p>subtitle 1</p>
          <p>subtitle 2</p>
          <p>subtitle 3</p>
          <p>subtitle 4</p>
          <p>subtitle 5</p>
          <p>subtitle 6</p>
          <p>subtitle 7</p>
        </div>
        <i class="fas fa-minus"></i><i class="fas fa-plus"></i>
      </div>
    );
  }
}


export default Footer;





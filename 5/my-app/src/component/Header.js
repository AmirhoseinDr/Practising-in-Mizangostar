import React from 'react'
import Menu from './Menu'
import TimeFrame from './TimeFrame'

class Header extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Menu/> 
        </div>
        <div>
          <TimeFrame/>
        </div>
      </div>
    );
  }
}

export default Header;
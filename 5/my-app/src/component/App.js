import React from 'react'
import Header from './Header';
import Robot from './Robot';
import Cards from './Cards'
import Touch from './Touch'
import Footer from './Footer'

class App extends React.Component {
  render(){
    return (
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <Robot/>
        </div>
        <div>
          <Cards/>
        </div>
        <div>
          <Touch/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
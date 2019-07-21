import React, {Component} from 'react';
import './Aside.scss';



class Aside extends Component {
  constructor() {
    super()
    this.state = {
      currentTab: 'home'
    }
  }

  image ={
    height: '50px'
}


  render() {
    return(
      <aside>
        <button>Favorites</button>
      </aside>
    )
  }
}


export default Aside;
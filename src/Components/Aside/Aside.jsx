import React, {Component} from 'react';
import './Aside.scss';
import active from '../../images/bookmark-active.png';
import inactive from '../../images/bookmark-inactive.png';


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
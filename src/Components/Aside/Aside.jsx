import React, {Component} from 'react';
import './Aside.scss';


class Aside extends Component {
  constructor() {
    super()
    this.state = {
      currentTab: 'home'
    }
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
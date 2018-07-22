import React, {Component} from 'react'

class Menu extends Component{

  render(){
    return (
      <nav id="menu">
        <header className="major">
          <h2>Menu</h2>
        </header>
        <ul>
          <li><a href="index.html">Homepage</a></li>
          <li><a href="profile.html">View Profile</a></li>
          <li><a href="opportunities.html">Opportunities</a></li>
          <li><a href="connect.html">Network/Connect</a></li>
          <li><a href="events.html">Events</a>	</li>
        </ul>
      </nav>
    )
  }
}

export default Menu

import React, {Component} from 'react'

class Searchbar extends Component{

  render(){
    return (
      <section id="search" className="alt">
        <form method="post" action="#">
          <input type="text" name="query" id="query" placeholder="Search" />
        </form>
      </section>
    )
  }
}

export default Searchbar

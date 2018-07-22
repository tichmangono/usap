import React, {Component} from 'react'

class Mainsection extends Component{

  render(){
    return (
      <section id="banner">
        <div className="content">
          <header>
            <h1>Alumni Topic of the Month</h1>
            <p>This month we focus on networking</p>
          </header>
          <p>
          Ko waivepiko vamwe vachienda kuchikoro? Hezvino wangova rombe rinozungaira nenyika. Nhai iwe nhubu, wairovereiko vamwe nembama? Chamatenganzunga chako chaigwadza chaizvo!
          </p>
          <ul className="actions">
            <li><a href="#" className="button big">Learn More</a></li>
          </ul>
        </div>
        <span className="image object">
          <img className="usaplogo" alt="NO IMAGE DATA, PLACE LOGO HERE" />
        </span>
      </section>
    )
  }
}

export default Mainsection

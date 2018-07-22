import React, {Component} from 'react'

class Infotab extends Component{

  render(){
    return (
      <section>
        <header className="major">
          <h2>Get in touch</h2>
        </header>
        <p>Itai muchitaura nevamwe. Zvenyu avekuti kana magara kuStates mava kushaina moregedza. Icho!</p>
        <ul className="contact">
          <li className="fa-envelope-o"><a href="#">bhora.mberi@united.com</a></li>
          <li className="fa-phone">(000) 000-0000</li>
          <li className="fa-home">1234 Muchongoyo Close #8254<br />
          Harare, Zimbabwe</li>
        </ul>
      </section>
    )
  }
}

export default Infotab

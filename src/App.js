import React, { Component } from 'react';
import usaplogo from './usap_logo_web.jpg'
import './App.css';
import './assets/css/main.css';
import {Footer} from './components'
import {Header} from './components'
import {Mainsection} from './components'
import {Article} from './components'
import {Searchbar} from './components'
import {Menu} from './components'
import {Infotab} from './components'

class App extends Component {
  render() {
    return (
      <div id="wrapper">

          <div id="main">
            <div className="inner">

            <Header/>

              <Mainsection/>

                  <section>
                    <header className="major">
                      <h2>Other Alumni News</h2>
                    </header>
                    <div className="mini-posts">
                      <div className="row">
                        <div className="col">
                          <Article/>
                        </div>
                          <div className="col">
                          <Article/>
                        </div>
                        <div className="col">
                          <Article/>
                        </div>
                        <div className="col">
                          <Article/>
                        </div>
                      </div>
                    </div>
                    <ul className="actions">
                      <li><a href="#" className="button">More</a></li>
                    </ul>
                  </section>

            </div>
          </div>

          <div id="sidebar">
            <div className="inner">

                <Searchbar/>

                  <Menu/>

                  <Infotab/>

                <Footer/>

            </div>
          </div>

      </div>

    );
  }
}

export default App;

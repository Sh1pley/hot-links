import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase/app'
import Link from './Link'

class App extends Component {
  constructor(props) {
    super(props);
    this.setLinks = this.setLinks.bind(this)
    this.state = {
      isFetching: false
    }
  }

  componentWillMount() {
    this.getLinks();
  }

  getLinks = () => {
    this.setState({ isFetching: true })
    fetch('https://hotness.herokuapp.com/api/v1/hotreads')
    .then( (response) => {
      response.json().then((json) => {
        this.setLinks(json)
      })
    })
  }

  setLinks = (links) => {
    this.setState({ 
      links: links,
      isFetching: false
    });
  }

  render() {
    let linksShow = null
    if (this.state.isFetching === false) {
      linksShow = this.state.links.map((link) => {
        return {link}
      })
        
    } else {
      linksShow = <div> Loading... </div>
    }
    return (
      <div className="links-main">
        <div className="header">
          <div className='container'> 
            <h2>Links!</h2>
          </div>
        </div>
        <div className='container'>
          <div className='links-list'> 
            { linksShow }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

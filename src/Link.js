import React, { Component } from 'react'

class Link extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    /*let links = this.props.links.map((link) => {
      <div>
        link.title
        link.url
      </div>*/
    // })
    return (
      <div> 
        {this.props.links}  
      </div>
    )
  }
  }

  export default Link;
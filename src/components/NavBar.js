import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="NavBar">
          <li className="nav-item nav-name">D/M</li>
          <li className="nav-item nav-last"><a href="#contact" className="nav-link">Contact</a></li>          
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
		  <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
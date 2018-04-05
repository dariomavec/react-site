import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark fixed expand="md" className="navbar-dark fixed-top">
          <NavbarBrand href="/" className="nav-name"><h1>D/M</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about" className="nav-item"><h1>About</h1></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" className="nav-item"><h1>Projects</h1></NavLink>
              </NavItem>           
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

/*class NavBar extends Component {
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
}*/
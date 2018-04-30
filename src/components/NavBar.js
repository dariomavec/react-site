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
				  {this.props.links.map(function(listValue){
					return <NavItem> <NavLink href={listValue[1]} className="nav-item"><h1>{listValue[0]}</h1></NavLink></NavItem>;
				  })}          
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
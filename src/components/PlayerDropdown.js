import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class PlayerDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
	console.log(this.props.name);
	this.handlePlayerChange = this.handlePlayerChange.bind(this);
  }

  handlePlayerChange(e) {
    this.props.onDropdownChange(e.target.textContent);
  }
  
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
			{this.props.name}
        </DropdownToggle>
        <DropdownMenu>
		  {this.props.players.map(player => 
			  <DropdownItem key={player} onClick={this.handlePlayerChange}>
				{player}
			  </DropdownItem>
		  )}
          
        </DropdownMenu>
      </Dropdown>
    );
  }
}

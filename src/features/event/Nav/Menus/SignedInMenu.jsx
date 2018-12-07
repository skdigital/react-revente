import React, { Component } from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SignedInMenu extends Component {
  state = {};
  render() {
    const { onSignOut } = this.props;
    return (
      <React.Fragment>
        <Menu.Item position="right">
          <Image avatar spaced="right" src="/assets/user.png" />
          <Dropdown pointing="top left" text="Username">
            <Dropdown.Menu>
              <Dropdown.Item text="Create Event" icon="plus" />
              <Dropdown.Item text="My Events" icon="calendar" />
              <Dropdown.Item text="My Network" icon="users" />
              <Dropdown.Item text="My Profile" icon="user" />
              <Dropdown.Item
                as={Link}
                to="/settings"
                text="Settings"
                icon="settings"
              />
              <Dropdown.Item
                onClick={() => onSignOut()}
                text="Sign Out"
                icon="power"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </React.Fragment>
    );
  }
}

export default SignedInMenu;

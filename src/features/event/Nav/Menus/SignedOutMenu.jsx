import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const SignedOutMenu = ({ onSignIn }) => {
  return (
    <React.Fragment>
      <Menu.Item position="right">
        <Button onClick={() => onSignIn()} basic inverted content="Login" />
        <Button
          basic
          inverted
          content="Register"
          style={{ marginLeft: '0.5em' }}
        />
      </Menu.Item>
    </React.Fragment>
  );
};

export default SignedOutMenu;

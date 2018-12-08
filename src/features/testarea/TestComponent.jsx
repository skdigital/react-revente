import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter, decrementCounter } from './testActions';

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  state = {};
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h2>TestComponent</h2>
        <h3>The answer is: {data}</h3>
        <Button.Group>
          <Button
            onClick={incrementCounter}
            color="green"
            content="Increment"
          />
          <Button.Or />
          <Button onClick={decrementCounter} color="red" content="Decrement" />
        </Button.Group>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);

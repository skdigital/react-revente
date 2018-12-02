import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
  state = {};
  render() {
    return (
      <List.Item>
        <Image as="a" size="mini" circular src={this.props.photoUrl} />
      </List.Item>
    );
  }
}

export default EventListAttendee;

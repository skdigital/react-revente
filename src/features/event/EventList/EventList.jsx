import React, { Component } from 'react';
import EventListItem from '../EventList/EventListItem';

class EventList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Event List</h1>
        {this.props.events.map(event => (
          <EventListItem event={event} key={event.id} />
        ))}
      </div>
    );
  }
}

export default EventList;

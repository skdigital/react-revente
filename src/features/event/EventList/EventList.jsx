import React, { Component } from 'react';
import EventListItem from '../EventList/EventListItem';

class EventList extends Component {
  state = {};
  render() {
    const { events, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map(event => (
          <EventListItem
            onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
            event={event}
            key={event.id}
          />
        ))}
      </div>
    );
  }
}

export default EventList;

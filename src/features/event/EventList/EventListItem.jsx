import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
  state = {};
  render() {
    const { event, onEventOpen, deleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> time
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {/* If statemenet checks to see if
            attendees exist to avoid
            map error */}
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListAttendee
                  key={attendee.id}
                  photoUrl={attendee.photoURL}
                />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Item.Group>
            <Button
              basic
              as="a"
              color="red"
              floated="right"
              content="Delete"
              onClick={deleteEvent(event.id)}
            />
            <Button
              as="a"
              color="teal"
              floated="right"
              content="View"
              onClick={onEventOpen(event)}
            />
          </Item.Group>
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;

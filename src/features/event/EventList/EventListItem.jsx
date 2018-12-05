import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
  state = {};
  render() {
    const {
      title,
      date,
      description,
      hostedBy,
      attendees,
      hostPhotoURL
    } = this.props.event;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {date} |
            <Icon name="marker" /> time
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {/* If statemenet checks to see if
            attendees exist to avoid
            map error */}
            {attendees &&
              attendees.map(attendee => (
                <EventListAttendee
                  key={attendee.id}
                  photoUrl={attendee.photoURL}
                />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{description}</span>
          <Button
            style={{ marginTop: 10 }}
            as="a"
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;

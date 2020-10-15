import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Content,
  Text,
  Badge,
  Container,
  Fab,
  Icon,
} from 'native-base';
import appStyles from '../appStyles';

export default class ChatScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar>
            <Left>
            <Thumbnail
                source={
                  require('../assets/fajar.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Fajar Firmansyah</Text>
              <Text note>How about 'ur appointment?</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                02:30 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>2</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
            <Thumbnail
                source={
                  require('../assets/inda.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Inda Firmansyah</Text>
              <Text note>Are you healthy enough to go on the trip?</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                08:00 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>1</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={
                  require('../assets/suharty.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Suharty</Text>
              <Text note>We're going cross that bridge when we get there</Text>
            </Body>
            <Right>
              <Text note>4:45 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
            <Thumbnail
                source={
                  require('../assets/firmansyah.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Firmansyah</Text>
              <Text note>From here on out, we should be meeting every single week.</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </Content>
        <Fab style={appStyles.fabColor} position="bottomRight">
          <Icon type="MaterialIcons" name="chat" />
        </Fab>
      </Container>
    );
  }
}
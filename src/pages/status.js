import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Content,
  Text,
  Container,
  Fab,
  Icon,
  Button,
} from 'native-base';
import appStyles from '../appStyles';
export default class StatusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar noBorder>
            <Left>
            <Thumbnail
                source={
                  require('../assets/aldi.jpg')
                }
              />
              <Icon
                type="MaterialIcons"
                name="add-circle"
                style={appStyles.addStatusIcon}
              />
            </Left>
            <Body>
              <Text>My Status</Text>
              <Text note>10 mintues ago</Text>
            </Body>
          </ListItem>
          <ListItem itemDivider style={appStyles.listItemDivider}>
            <Text note style={{fontSize: 12}}>
              Recent Updates
            </Text>
          </ListItem>
          <ListItem avatar>
            <Left>
            <Thumbnail
                source={
                  require('../assets/dhanang.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Dhanang Prasetya</Text>
              <Text note>Today, 07:00 pm</Text>
            </Body>
          </ListItem>
          <ListItem avatar>
            <Left>
            <Thumbnail
                source={
                  require('../assets/ringgas.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Ringgas WS</Text>
              <Text note>Today, 13:10 pm</Text>
            </Body>
          </ListItem>
          <ListItem avatar>
            <Left>
            <Thumbnail
                source={
                  require('../assets/mawan.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Mawan Inalum</Text>
              <Text note>Today, 14:00 pm</Text>
            </Body>
          </ListItem>
          <ListItem itemDivider style={appStyles.listItemDivider}>
            <Text note style={{fontSize: 12}}>
              Viewed Updates
            </Text>
          </ListItem>
          <ListItem avatar>
            <Left>
            <Thumbnail
                source={
                  require('../assets/agus.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Agus Prabowo</Text>
              <Text note>Yesterday, 08:00 pm</Text>
            </Body>
          </ListItem>
        </Content>
        <Fab
          style={appStyles.fabColor}
          active={true}
          direction="up"
          position="bottomRight">
          <Icon type="MaterialIcons" name="photo-camera" />
          <Button style={{backgroundColor: '#F5F5F5'}}>
            <Icon type="MaterialIcons" name="edit" style={{color: '#354321'}} />
          </Button>
        </Fab>
      </Container>
    );
  }
}
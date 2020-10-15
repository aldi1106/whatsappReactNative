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
import {View} from 'react-native';
export default class CallsScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
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
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  type="MaterialIcons"
                  name="call-made"
                  style={[appStyles.callIcon, {color: '#25D366'}]}
                />
                <Text note>Yesterday, 09:30 pm</Text>
              </View>
            </Body>
            <Right>
              <Icon
                style={{color: '#89463F'}}
                type="MaterialIcons"
                name="call"
              />
            </Right>
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
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  type="MaterialIcons"
                  name="call-received"
                  style={[appStyles.callIcon, {color: '#FF0000'}]}
                />
                <Text note>Yesterday, 08:23 pm</Text>
              </View>
            </Body>
            <Right>
              <Icon
                style={{color: '#89463F'}}
                type="MaterialIcons"
                name="videocam"
              />
            </Right>
          </ListItem>
        </Content>
        <Fab style={appStyles.fabColor} position="bottomRight">
          <Icon type="MaterialIcons" name="phone-in-talk" />
        </Fab>
      </Container>
    );
  }
}
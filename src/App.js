import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Right,
  Body,
  Icon,
  Text,
  Tabs,
  Tab,
  ScrollableTab,
  TabHeading,
  Badge,
} from 'native-base';
import ChatsScreen from './pages/chats';
import StatusScreen from './pages/status';
import CallsScreen from './pages/calls';
import {StatusBar} from 'react-native';
import appStyles from './appStyles';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      StatusBar.setBackgroundColor('#354321');
    }, 100);
  }
  render() {
    return (
      <Container>
        <Header noLeft style={appStyles.headerBackgroundColor}>
          <Body>
            <Title style={appStyles.appTitle}>WhatsApp Business</Title>
          </Body>
          <Right>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="search" />
            </Button>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="more-vert" />
            </Button>
          </Right>
        </Header>
        <Tabs
          tabContainerStyle={{
            elevation: 0,
          }}
          renderTabBar={() => <ScrollableTab />}
          tabBarUnderlineStyle={appStyles.tabBarUnderLine}
          tabBarActiveTextColor="red"
          initialPage={3}
          tabBarBackgroundColor="#354321">
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#354321'}}>
                <Icon type="MaterialIcons" name="photo-camera" />
              </TabHeading>
            }>
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                flex: 1,
              }}>
              Camera Screen
            </Text>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#354321'}}>
                <Text style={appStyles.tabsText}>CHATS</Text>
                <Badge style={appStyles.badge}>
                  <Text style={appStyles.badgeText}>2</Text>
                </Badge>
              </TabHeading>
            }>
            <ChatsScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#354321'}}>
                <Text style={appStyles.tabsText}>STATUS</Text>
              </TabHeading>
            }>
            <StatusScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#354321'}}>
                <Text style={appStyles.tabsText}>CALLS</Text>
              </TabHeading>
            }>
            <CallsScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
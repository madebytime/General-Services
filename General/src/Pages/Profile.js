import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';

import { Avatar } from 'react-native-elements';

import { Block, Text } from '../Utility/';

import * as theme from '../Utility/theme';

class Profile extends Component {
  renderHeader() {
    return (
      <Block flex={0.5} column style={{ paddingHorizontal: 15, }}>
        <Block flex={false} row style={{ paddingVertical: 20, }}>
          <Block center card shadow>
            <Text h1 semibold white>
              Hoshi
            </Text>
          </Block>

        </Block>
        <Block center card shadow color="white" style={styles.headerChart}>
          <Block>
            <Avatar 
            rounded
            size="large"
            title="JD"
            onPress={() => console.log('Funcionando')}
            activeOpacity={0.7}
            containerStyle={{  }}
            />
          </Block>
          <Block>
            <Text h2 light color="black" style={{ paddingVertical: 20 }}>John Doe</Text>
          </Block>
        </Block>
      </Block>
    )
  }

  renderRequests() {
    return (
      <Block flex={0.8} column color="gray2" style={styles.requests}>
        <Text semibold>Requests</Text>
      </Block>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.safe}>
        {this.renderHeader()}
        {this.renderRequests()}
      </SafeAreaView>
    );
  }

}


export default Profile;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.tertiary,
  },
  headerChart: {
    paddingTop: 30,
    paddingBottom: 45,
    zIndex: 1
  },
  requests: {
    marginTop: -40,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1
  }
});
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'


import { View, Text, TouchableOpacity, StyleSheet, Easing, Animated } from 'react-native';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionValue: new Animated.Value(-60),
    };
    this.closeNotification = this.closeNotification.bind(this);
    this.animateNotification = this.animateNotification.bind(this);
  }
  animateNotification(value) {
    const { positionValue } = this.state;
    Animated.timing(
      positionValue,
      {
        toValue: value,
        duration: 300,
        velocity: 3,
        tension: 2,
        friction: 8,
        easing: Easing.easeOutBack,

      }

    ).start();
  }
  closeNotification() {
    this.props.handleCloseNotification();
  }
  render() {
    const { type, firstLine, secondLine, showNotification } = this.props;
    const { positionValue } = this.state;
    showNotification ? this.animateNotification(0) : this.animateNotification(-60);
    return (
      <Animated.View style={[{ marginBottom: positionValue}, styles.wrapper]}>
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}>{type}</Text>
          <Text style={styles.erroMessage}>{firstLine}</Text>
          <Text style={styles.erroMessage}>{secondLine}</Text>
        </View>
        <TouchableOpacity style={styles.closeButton}
          onPress={this.closeNotification}>
          <Icon
            name='window-close'
            size={20}
            color={colors.black} />
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  handleCloseNotification: PropTypes.func,
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: 60,
    width: '100%',
    padding: 10,

  },

  notificationContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: 8,
  },
  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 15,
    fontWeight: '500',

  },
  erroMessage: {
    fontSize: 15,
    fontWeight: '200'
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 999,
  },
  errorMessageContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 2,
  },
});
import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';
import Theme from '../../theme';

class AppLoadingContainer extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={Theme.styles.container}>
        <Text>Loading...</Text>
        <LottieView
          loop={true}
          style={{width: 100, height: 100}}
          source={require('../../animations/infinite_rainbow.json')}
          ref={animation => {
            this.animation = animation;
          }}/>
      </View>
    );
  }
}

export default AppLoadingContainer;

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LoadingScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
      	<Text>LoadingScreen</Text>
      </View>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

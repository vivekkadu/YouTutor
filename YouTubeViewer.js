import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { SearchBar } from 'react-native-elements'

import {StackNavigator} from 'react-navigation';
import Youtube            from 'react-native-youtube';
import { Card, CardSection } from './src/components/common';

export default class YoutubeViewer extends Component<{}> {


  render() {
    return (


        <View style={styles.container}>

        <Text style={styles.titleStyle}>{this.props.navigation.state.params.title}</Text>
          <Youtube
                ref={(component) => { this._youTubePlayer = component }}
                videoId={this.props.navigation.state.params.youtubeId}
                play={true}
                fullscreen={true}
                loop={false}z
                apiKey='AIzaSyB3ZtedtLw1MqGI8AbdzdqakF9B6y9bNGM'
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                onProgress={e => this.setState({ currentTime: e.currentTime, duration: e.duration })}

                style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
                >
              </Youtube>
              </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  viewStyle: {
    flex:1
  },
titleStyle: {
    fontSize: 17,
    color: 'black'
  },

});

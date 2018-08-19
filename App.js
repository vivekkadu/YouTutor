import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import {StackNavigator}   from 'react-navigation';
import YoutubeViewer      from './YouTubeViewer';
import { Container, Header, Content, Footer, FooterTab, Icon, Text, Badge } from 'native-base';
import { Card, CardSection, Button, Spinner } from './src/components/common';

class App extends Component<{}> {

  static navigationOptions={
    title: 'You Tutor',

    headerRight:(

      <TouchableOpacity onPress={this.renderSearch}>
      <Image
          style={{height:30,width:30,marginRight:7}}
          source={require('./src/img/search.png')}
        />
      </TouchableOpacity>
    )  ,
    headerStyle: {
      backgroundColor: '#fed403',
    },
    headerTitleStyle: {
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize:26,
      fontWeight: 'bold'

    }
  }



  constructor(props){
    super(props)
    this.state={
      isLoading: true,
      data:[],
      search:false
    }
  }
  renderSearch(){
    return this.searchBar.hide()
  }
componentWillMount(){
}

  componentDidMount(){
    return fetch("https://www.googleapis.com/youtube/v3/search?key="+"AIzaSyB3ZtedtLw1MqGI8AbdzdqakF9B6y9bNGM"+"&channelId=UC0OuUOHJesTHqJ10kREsOoA&part=snippet,id&order=date&maxResults=20")
      .then((response) => response.json())
      .then((responseJson) => {
        var videoId = []
        responseJson.items.forEach(function(item){
          videoId.push(item)
        })
        this.setState({
          isLoading: false,
          data: videoId
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
     <ScrollView >
    
         {this.state.data.map((item, i)=>
            <Card>
        <CardSection><Text  style={styles.titleStyle}>{item.snippet.title}</Text></CardSection>
        <CardSection>
        <Image source={{uri: item.snippet.thumbnails.high.url}} style={{width: 320, height: 170}}></Image>
        </CardSection>
        <CardSection>
        <Button key={item.id.videoId}
         onPress={()=>navigate('YoutubeViewer', {youtubeId: item.id.videoId, title: item.snippet.title})}>
         Play Now
        </Button>
        </CardSection>

        </Card>
          )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchStyle: {
    height:50,
    width:50
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
   titleStyle: {
     fontSize:17,
     marginLeft:10,
     color:'black'
  }

});

export default screens = StackNavigator({
  Home: {screen: App},
  YoutubeViewer: {screen: YoutubeViewer}
})

import React,{ Component } from 'react';
import { View, Text , Image } from 'react-native';
import { Spinner } from './common';

class SplashScreen extends Component {
  render(){
    return(
       <View style={styles.container}>
       <Image
         style={styles.image}
         source={require('../img/main.jpg')}
       />
       <Spinner />
       </View>
    );
  }
}
const styles = {
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  image: {
    height: 200,
    width: 200,
  }
}
export default SplashScreen;

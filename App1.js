
import React, { Component } from 'react';
import SplashScreen from './src/components/SplashScreen';
import App from './App';

export default class App1 extends Component<{}> {
  constructor(props) {
    console.disableYellowBox = true;
   super(props);
   this.state = {
   component: <SplashScreen />
};
}


componentDidMount() {
     this.timeoutHandle = setTimeout(() => {
          this.setState({ component: <App /> })
     }, 1500);
}

componentWillUnmount() {
     clearTimeout(this.timeoutHandle);
}

  render() {
    return (
      this.state.component
    );
  }
}



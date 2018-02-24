
import React from 'react';
import { Text,View }from 'react-native';


//create a header function based component

const Header=(props)=>{

     const {textStyle,viewStyle}=styles

	return (

		<View style={viewStyle}>
		     <Text style={textStyle}>{props.headerText}</Text>

		</View>
		);
};


const styles={

  viewStyle:{
   backgroundColor:'#FED403',
   shadowColor:'#000',
   shadowOffset:{width:0,height:2},
   shadowOpacity:0.2,
   elevation:2,
   position:'relative'
  },


	textStyle:{
    marginTop:10,
    marginBottom:10,
    color:'white',
		fontSize:34,
    alignSelf:'center'

	}
};

export {Header};

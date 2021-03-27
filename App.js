import React, { Component } from 'react';
import { Button, View, Text,TouchableOpacity, StyleSheet } from 'react-native';


export default class App extends Component {

display_alert = ()=>{
  alert("Warning")
}

  render() {
    return (
      <View style={styles.container}>
     <TouchableOpacity style = {styles.button}  
     onPress= {this.display_alert} > 

      <Text style={{marginTop:15, textSize:70,}}> Sound1 </Text>
     <Text style={{marginTop:55, textSize:70, backgroundColor:"pink"}}> Sound2 </Text>

      <Text style={{marginTop:100, textSize:70 ,backgroundColor:"red"}}> Sound3 </Text>
      <Text style={{marginTop:150, textSize:70, backgroundColor:"violet"}}> Sound4 </Text>
      
     </TouchableOpacity>
  
      </View>
    );
  }
}

var styles = StyleSheet.create({

button :{
marginTop:100,
backgroundColor:"yellow",
marginLeft:90,
marginRight:50,
width:200,
height:50,
textAlign:"center",


}
})





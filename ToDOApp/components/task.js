import React from 'react';
import {View,StyleSheet, Text,TouchableOpacity} from 'react-native';
const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
      backgroundColor: '#ffffff',
      padding:15,
      borderRadius:10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      marginBottom:20,
  },
  itemLeft:{
      flexDirection:'row',
      alignItems: 'center',
  },  
  square: {
      backgroundColor:'#558CF6',
      width:24,
      height:24,
      opacity:0.4,
      borderRadius:5,
      marginRight:10,
  },
  itemText: {
      maxWidth:'80%',
  },
  circular: {
      width:12,
      height:12,
      borderRadius:'50%',
      borderColor:'#558CF6',
      borderWidth:2,
  },
})

export default Task;
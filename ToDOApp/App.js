import React,{useState} from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import Task from './components/task'
export default function App() {
  const [task,setTask] = useState();
  const [taskitems,setTaskitems] = useState([]);
  const handleTask = () => {
    setTaskitems([...taskitems,task])
    setTask('')
  }
  const CompleteTask = (index) => {
    let itemsCopy = [...taskitems]
    itemsCopy.splice(index,1)
    setTaskitems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainTask}>
        <Text style={styles.todotitle}>Today Tasks</Text>
        <View style={styles.todo}>
          {
          taskitems.map((item,index)=>{
            return (
              <TouchableOpacity key={index} onPress={()=> CompleteTask()}>
                <Task text={item}/>
              </TouchableOpacity>
            )
          })
          }
        </View>
      </View>
      <KeyboardAvoidingView style={styles.keyboardText}>
        <TextInput style={styles.textinput} placeholder={'Enter the Task'} value={task} onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity style={styles.sendButton} onPress={() => handleTask()}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED'
  },
  mainTask: {
    paddingTop:70,
    paddingHorizontal:20,
  },
  todotitle : {
    fontSize:24,
    color: '#000000',
    fontWeight: 'bold',
  },
  todo: {
    marginTop:20,
  },
  keyboardText:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textinput: {
    paddingVertical:15,
    paddingHorizontal:15,
    width:300,
    borderRadius:60,
    backgroundColor:'#fff',
    borderColor:'#558CF6',
    borderWidth:1,
    outline:'none',
  },
  sendButton:{
    width:50,
    height:50,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'50%',
    fontWeight:'bold',
    borderColor:'#558CF6',
    borderWidth:1,
  },
  buttonWrapper: {},
  buttonText: {},
});

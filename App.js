import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,  FlatList, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons'



export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('');


  const changeHandler = (val) => {
    setText(val);
  }
  const submitHandler = () => {
    setTodos(
      [
        { text: text, key: Math.random().toString(), completed: false },
        ...todos
      ])

  }

  const allTodoHandler = () => {
    setStatus('All')
  }

  const activeTodoHandler = () => {
    setStatus('Active')
  }

  const DoneTodoHandler = () => {
    setStatus('Done')
  }

  const checkHandler = (key) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === key) todo.completed = !todo.completed;
        return todo;
      })
    )
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        MY TODO APP
      </Text>

      <View style={styles.card}>



        <View flexDirection="row">
          <TextInput
            style={styles.input}
            placeholder="write here...."
            placeholderTextColor={'#999'}
            returnKeyType={'done'}
            autoCorrect={false}
            onChangeText={(val) => changeHandler(val)}


          />
          <SimpleLineIcons style={styles.addbutton} size={40} name='plus' color='lightpink' onPress={submitHandler}></SimpleLineIcons>
        </View>
        <View flexDirection="row">
          <TouchableOpacity onPress={allTodoHandler}>
            <Text style={styles.button} >All </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={activeTodoHandler}>
            <Text style={styles.button}>Active </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={DoneTodoHandler}>
            <Text style={styles.button} >Done </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={todos}
          renderItem={todo => {
            if (status == 'Active') {
              return !todo.item.completed &&
                <View flexDirection='row'>

                  <FontAwesome style={styles.checked}
                    name={
                      todo.item.completed ? "check-square-o" : "square-o"}
                    size={30}
                    color={todo.item.completed ? 'grey' : 'black'}
                    onPress={() => checkHandler(todo.item.key)} />
                  <Text

                    style={{
                      padding: 5,
                      marginBottom: 5,
                      marginLeft: 10,
                      borderColor: 'grey',
                      width: 280,
                      borderWidth: 1,
                      borderRadius: 5,
                      fontSize: 15,
                      color: todo.item.completed ? 'grey' : 'black',
                      textDecorationLine: todo.item.completed ? 'line-through' : 'none',
                    }}
                  >{todo.item.text}</Text>
                </View>
            }
            else if (status == 'Done') {
              return todo.item.completed && <View flexDirection='row'>

                <FontAwesome style={styles.checked}
                  name={
                    todo.item.completed ? "check-square-o" : "square-o"}
                  size={30}
                  color={todo.item.completed ? 'grey' : 'black'}
                  onPress={() => checkHandler(todo.item.key)} />
                <Text

                  style={{
                    padding: 5,
                    marginBottom: 5,
                    marginLeft: 10,
                    borderColor: 'grey',
                    width: 280,
                    borderWidth: 1,
                    borderRadius: 5,
                    fontSize: 15,
                    color: todo.item.completed ? 'grey' : 'black',
                    textDecorationLine: todo.item.completed ? 'line-through' : 'none',
                  }}
                >{todo.item.text}</Text>
              </View>
            }
            else {
              return <View flexDirection='row'>

                <FontAwesome style={styles.checked}
                  name={
                    todo.item.completed ? "check-square-o" : "square-o"}
                  size={30}
                  color={todo.item.completed ? 'grey' : 'black'}
                  onPress={() => checkHandler(todo.item.key)} />
                <Text

                  style={{
                    padding: 5,
                    marginBottom: 5,
                    marginLeft: 10,
                    borderColor: 'grey',
                    width: 280,
                    borderWidth: 1,
                    borderRadius: 5,
                    fontSize: 15,
                    color: todo.item.completed ? 'grey' : 'black',
                    textDecorationLine: todo.item.completed ? 'line-through' : 'none',
                  }}
                >{todo.item.text}</Text>
              </View>
            }
          }
          }
        />
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',

  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: '300',
    marginTop: 50
  },
  input: {
    paddingLeft: 10,
    height: 50,
    margin: 10,
    marginTop: 20,
    borderRadius: 50,
    borderColor: '#bbb',
    borderWidth: 2,
    width: 250,
    fontSize: 20,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: 330,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 7,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  shadowOffset: {
    height: -1,
    width: 0
  },

  addbutton: {
    marginTop: 25,
  },

  button: {
    margin: 15,

    color: 'lightpink',
    borderColor: 'lightpink',
    borderRadius: 5,
    borderWidth: 2,
    width: 80,
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"

  },
  checked: {
    marginLeft: 5
  }
});



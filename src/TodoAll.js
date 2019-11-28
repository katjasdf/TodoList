import React, { useState } from 'react';
import { StyleSheet, View, CheckBox } from 'react-native';
import firebase from './components/firebase'
import { Text, ListItem } from 'react-native-elements'
import { FAB, Colors, Checkbox } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';

const TodoAll = (props) => {
  const [list, setList] = useState([])
  const [id, setId] = useState([])
  const {navigate} = props.navigation
  const [swipedIndex, setSwipedIndex] = useState()
  const [checked, setCheked] = useState(false)

  React.useEffect(() => {
    firebase.database().ref('items/').on('value', snapshot => {
      const data = snapshot.val ();
      const prods = Object.values(data);
      const keys = Object.keys(data);
      setList(prods);
      setId(keys);
    });
  }, []
  );

const deleteTodo = () => {
  firebase.database().ref('items/' + id[swipedIndex]).remove();
  todoRef.update({reads: incresement})
}

const swipeoutBtns = [
  {
    text: 'Delete',
    onPress: deleteTodo,
    backgroundColor: 'red'
  }]

  return (

    <View style={styles.container}>
 
      <Text style={{fontSize: 20, color: '#2089dc', marginTop: 25}}>Todo List</Text>

      <View style={styles.listcontainer}>
          {
            list.map((item, index) => (
              <Swipeout right={swipeoutBtns} onOpen={() => setSwipedIndex(index)} onClose={() => setSwipedIndex(null)} autoClose>
              <ListItem
                key={index}
                title={item.title}
                subtitle={item.date}
                rightIcon={() => {
                  return (
                      <Checkbox
                        style={{height: 10, width: 10}}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {setCheked({ checked: !checked }); }}
                      />
                    )
                }}
                bottomDivider
              />
              </Swipeout>
            ))
          }
      </View>

      <FAB 
      style={styles.fab}
      big
      icon="plus"
      onPress={() => navigate('AddTodo')}
      />

  </View>
  
  )

}

TodoAll.navigationOptions = ({navigate}) => ({title: null})

export default TodoAll;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listcontainer: {
      flex: 2,
      width: 400
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: Colors.blue500
    },    
});

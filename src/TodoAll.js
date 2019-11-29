import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import firebase from './components/firebase'
import { FAB, Colors, Checkbox, List } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';

const TodoAll = (props) => {
  const [list, setList] = useState([])
  const [id, setId] = useState([])
  const {navigate} = props.navigation
  const [swipedIndex, setSwipedIndex] = useState()
  const [checked, setChecked] = useState(false)
  const [reload, setReload] = useState()

  React.useEffect(() => {
    firebase.database().ref('items/').on('value', snapshot => {
      const data = snapshot.val ();
      const prods = Object.values(data);
      const keys = Object.keys(data);
      setList(prods);
      setId(keys);
    });
  }, [reload]
  );

  const changeStatus = (index) => {
    let number = 0;
    if(!checked) {
      number = number + 1;
      firebase.database().ref('items/' + id[index]).update(
        {'checked': true}
      )

    } else {
      number = number + 1;
      firebase.database().ref('items/' + id[index]).update(
        {'checked': false}
      )
    }
    setReload(number)
}

const deleteTodo = () => {
  firebase.database().ref('items/' + id[swipedIndex]).remove();
}

const swipeoutBtns = [
  {
    text: 'Delete',
    onPress: deleteTodo,
    backgroundColor: 'red'
  }]

  return (

    <View style={styles.container}>

      <ScrollView style={styles.listcontainer}>
        <List.Section>
          <List.Subheader>All todos</List.Subheader>
          {
            list.map((item, index) => (
              <Swipeout right={swipeoutBtns} onOpen={() => setSwipedIndex(index)} onClose={() => setSwipedIndex(null)} autoClose>
                <List.Item
                  style={{backgroundColor: 'white', 
                          width: '100%', 
                          height: 60}}
                  title={item.title}
                  right={() => <Checkbox
                                style={{height: 50, width: 50, color: 'black'}}
                                status={item.checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                  setChecked(item.checked)
                                  changeStatus(index)}}
                              />}
                  onPress={() => 
                    navigate('Todo', {
                    title: item.title,
                    category: item.category,
                    date: item.date,
                    time: item.time,
                    description: item.description
                    })}
                >
                </List.Item>
              </Swipeout>
            ))
          }
        </List.Section>
      </ScrollView>

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
      alignItems: 'flex-end',
      right: 30,
      bottom: 30,
      backgroundColor: Colors.blue500
    },    
});

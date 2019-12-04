import React, { useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import firebase from './components/firebase'
import { FAB, Colors, Checkbox, List } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';

const TodoList = (props) => {
  const [list, setList] = useState([])
  const [id, setId] = useState([])
  const { navigate } = props.navigation
  const [swipedIndex, setSwipedIndex] = useState()
  const { params } = props.navigation.state

  const user = firebase.auth().currentUser

  const loadData = useCallback(()=> {
    firebase.database().ref('items/').on('value', snapshot => {
      const data = snapshot.val();
      const filteredData = Object.entries(data).reduce(
        (prev, [key, value]) => ({
          ...prev,
          ...(value.user === user.uid ? { [key]: value } : {})
        }),
        {}
      )

      let prods = Object.values(filteredData);
      const keys = Object.keys(filteredData);

      if (params.category === 'School') {
        prods = prods.filter(item => item.category === 'School')
      } else if (params.category === 'Home') {
        prods = prods.filter(item => item.category === 'Home')
      } else if (params.category === 'Work') {
        prods = prods.filter(item => item.category === 'Work')
      } else {
        prods = prods
      }

      setList(prods);
      setId(keys);
    });
  })

  React.useEffect(() => {
    loadData()
  }, []
  );

  const changeStatus = (index, checked) => {
    firebase.database().ref('items/' + id[index]).update(
      {'checked': !checked}
    ).then(() => {
      loadData()
    })
}

const deleteTodo = () => {
  firebase.database().ref('items/' + id[swipedIndex]).remove().then(() => {
    loadData()
  });
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
          <List.Subheader>{params.category}</List.Subheader>
          {
            list.map((item, index) => (
              <Swipeout right={swipeoutBtns} onOpen={() => setSwipedIndex(index)} onClose={() => setSwipedIndex(null)} autoClose>
                <List.Item
                  style={{backgroundColor: 'white', 
                          width: '100%'}}
                  titleStyle={{textDecorationLine: item.checked ? 'line-through' : 'none'}}
                  title={item.title}
                  right={() => <View style={{borderWidth: 1, borderColor: 'black', borderRadius: 10}}>
                    <Checkbox
                      status={item.checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        changeStatus(index, item.checked)}
                      }
                    />
                    </View>}
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

TodoList.navigationOptions = ({navigate}) => ({title: null})

export default TodoList;

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

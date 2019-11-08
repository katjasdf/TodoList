import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import { Text, ListItem } from 'react-native-elements'
import { FAB, Colors } from 'react-native-paper';
import { blue100 } from 'react-native-paper/lib/typescript/src/styles/colors';

var firebaseConfig = {
    apiKey: "AIzaSyAfhEEloifNSMm2tj3m8VvHc5-NbGiD63k",
    authDomain: "todolist-3ef4d.firebaseapp.com",
    databaseURL: "https://todolist-3ef4d.firebaseio.com",
    projectId: "todolist-3ef4d",
    storageBucket: "todolist-3ef4d.appspot.com",
    messagingSenderId: "960221752935",
    appId: "1:960221752935:web:b534ed14f5681b09b06ec2",
    measurementId: "G-D4ZXKTZ78E"
  };

  firebase.initializeApp(firebaseConfig);

const TodoAll = (props) => {
  const [list, setList] = useState([])
  const [id, setId] = useState([])
  const { } = props.navigation.state

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

const deleteTodo = (index) => {
  firebase.database().ref('items/' + id[index]).remove();
}

  return (

    <View style={styles.container}>
 
      <Text style={{fontSize: 20, color: '#2089dc', marginTop: 25}}>Todo List</Text>

      <View style={styles.listcontainer}>
          {
            list.map((item, index) => (
              <ListItem
                key={index}
                title={item.todo}
                subtitle={item.date}
                bottomDivider
                onLongPress={() => deleteTodo(index)}
                Button={true}
              />
            ))
          }
      </View>

      <FAB 
      style={styles.fab}
      big
      icon="plus"
      color={Colors.amber100}
      onPress={() => console.log('Pressed')}
      />

  </View>
  
  )

}

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
      bottom: 0
    },    
});

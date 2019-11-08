import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import { Input, Button, Text } from 'react-native-elements'

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

const addTodo = (props) => {
    const [todo, setTodo] = useState('')
    const [date, setDate] = useState('')
    const { } = props.navigation.state

const addTodo = () => {
    firebase.database().ref('items/').push(
        {'todo': todo, 'date': date}
    );
}

return (

    <View style={styles.container}>

        <Text style={{fontSize: 20, color: '#2089dc', marginTop: 25}}>Add to Todo List</Text>

        <Input inputStyle={{marginTop:15}} placeholder='Todo'
            onChangeText={todo => setTodo(todo)} value={todo}/>

        <Input inputStyle={{marginTop:10}} placeholder='Date'
        onChangeText={date => setDate(date)} value={date}/>

        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.buttoncontainer}>
                <Button buttonStyle={{borderRadius:666, width:380, height:50}}
                title="Add" onPress={addTodo}/>
            </View>
        </KeyboardAvoidingView>

    </View>
)

}

const styles = StyleSheet.create({
    buttoncontainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 20
      },
});

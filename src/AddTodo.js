import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import { Input, Button, Text } from 'react-native-elements'

const AddTodo = (props) => {
    const [todo, setTodo] = useState('')
    const [date, setDate] = useState('')
    const {navigate} = props.navigation

const add = () => {
    firebase.database().ref('items/').push(
        {'todo': todo, 'date': date}
    )
    navigate('TodoAll')
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
                <Button 
                buttonStyle={{borderRadius:666, width:380, height:50}}
                title="Add"
                onPress={add}/>
            </View>
        </KeyboardAvoidingView>

    </View>
    
    )

}

export default AddTodo;

const styles = StyleSheet.create({
    buttoncontainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 20
      },
});

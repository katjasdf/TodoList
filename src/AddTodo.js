import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import { Input, Button, ButtonGroup, Text } from 'react-native-elements';

const AddTodo = (props) => {
    const [todo, setTodo] = useState({title:'', date: '', category: '', description: ''})
    const [selectedIndex, setSelIndex] = useState(0)
    const {navigate} = props.navigation

const add = () => {
    firebase.database().ref('items/').push(
        {'title': todo.title, 'date': todo.date, 'category': todo.category, 'description': todo.description}
    )
    navigate('TodoAll')
}

const updateIndex = (selectedIndex) => {
    setSelIndex(selectedIndex);
    if (selectedIndex == 0)
        setTodo({...todo, category: 'Work'})
    else if (selectedIndex == 0)
        setTodo({...todo, category: 'School'})
    else
        setTodo({...todo, category: 'Home'})
}

const btn1 = () => <Text>Work</Text>;
const btn2 = () => <Text>School</Text>;
const btn3 = () => <Text>Home</Text>;
const buttons = [{ element: btn1 }, { element: btn2 }, { element: btn3 }]

return (

    <View style={styles.container}>

        <Text style={{fontSize: 20, color: '#2089dc', marginTop: 25}}>Add to Todo List</Text>

        <Input inputStyle={{marginTop:15}} placeholder='Todo'
            onChangeText={value => setTodo({...todo, title: value})} value={todo.title}/>

        <Input inputStyle={{marginTop:10}} placeholder='Date'
        onChangeText={value => setTodo({...todo, date: value})} value={todo.date}/>

        <ButtonGroup style={{marginTop: 20}} buttons={buttons} onPress={updateIndex} selectedIndex={selectedIndex} />

        <Input inputStyle={{marginTop:10}} placeholder='Description'
        onChangeText={value => setTodo({...todo, description: value})} value={todo.description}/>

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

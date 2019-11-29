import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import firebase from './components/firebase'
import { Input, Button, ButtonGroup, Text } from 'react-native-elements';

const AddTodo = (props) => {
    const [todo, setTodo] = useState({title:'', date: '', time: '', category: '', description: ''})
    const [selectedIndex, setSelIndex] = useState(0)
    const {navigate} = props.navigation
    
const add = () => {
    firebase.database().ref('items/').push(
        {'title': todo.title, 'date': todo.date, 'time': todo.time, 'category': todo.category, 'description': todo.description, 'checked': false}
    )
    navigate('TodoAll')
}

const updateIndex = (selectedIndex) => {
    setSelIndex(selectedIndex);
    if (selectedIndex == 0)
        setTodo({...todo, category: 'Work'})
    else if (selectedIndex == 1)
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

        <Input inputStyle={{marginTop:10}} placeholder='Time'
        onChangeText={value => setTodo({...todo, time: value})} value={todo.time}/>

        <ButtonGroup style={{marginTop: 20}} buttons={buttons} onPress={updateIndex} selectedIndex={selectedIndex} />

        <Input inputStyle={{marginTop:10}} multiline={true} placeholder='Description'
        onChangeText={value => setTodo({...todo, description: value})} value={todo.description}/>

        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.buttoncontainer}>
                <Button 
                buttonStyle={{borderRadius:0, width:450, height:80}}
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
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 20
      },
});

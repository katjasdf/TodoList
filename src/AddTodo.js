import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import firebase from './components/firebase'
import { ButtonGroup, Text } from 'react-native-elements'
import { TextInput, Button, Colors } from 'react-native-paper'

const AddTodo = (props) => {
    const [todo, setTodo] = useState({title:'', date: '', time: '', category: '', description: ''})
    const [selectedIndex, setSelIndex] = useState(0)
    const {navigate} = props.navigation

    const user = firebase.auth().currentUser
    
const add = () => {
    firebase.database().ref('items/').push(
        {
            'title': todo.title,
            'date': todo.date,
            'time': todo.time,
            'category': todo.category,
            'description': todo.description,
            'checked': false,
            'user': user.uid
        }
    )
    navigate('Dashboard')
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
        <View style={{width: '95%'}}>
            <Text style={{fontSize: 20, color: '#2089dc', marginTop: 25}}>Add to Todo List</Text>

            <TextInput
                style={{margin: 10, backgroundColor: 'white'}}
                label='Title'
                placeholder='Rule the seven kindoms'
                theme={{ colors: { primary: Colors.blue500 }}}
                onChangeText={value => setTodo({...todo, title: value})} 
                value={todo.title}/>

            <TextInput
                style={{margin: 10, backgroundColor: 'white'}}
                label='Date'
                placeholder='30.12.2019'
                theme={{ colors: { primary: Colors.blue500 }}}
                onChangeText={value => setTodo({...todo, date: value})} 
                value={todo.date}/>

            <TextInput
                style={{margin: 10, backgroundColor: 'white'}}
                label='Time'
                placeholder='17.00'
                theme={{ colors: { primary: Colors.blue500 }}}
                onChangeText={value => setTodo({...todo, time: value})} 
                value={todo.time}/>

            <ButtonGroup 
                underlayColor='#2196f3'
                containerStyle={{height: 60}}
                style={{marginTop: 20}} 
                buttons={buttons} 
                onPress={updateIndex} 
                selectedIndex={selectedIndex}/>

            <TextInput
                style={{margin: 10, backgroundColor: 'white'}}
                label='Description'
                placeholder='And be atleast better than Joffrey while doing it'
                theme={{ colors: { primary: Colors.blue500 }}}
                multiline={true}
                onChangeText={value => setTodo({...todo, description: value})} 
                value={todo.description}/>

                <Button 
                style={{borderRadius: 666, marginTop: 60}}
                contentStyle={{height: 50}}
                mode='contained'
                uppercase={false}
                color={Colors.blue500}
                onPress={add}>
                Add todo   
                </Button>
        
        </View>

    </View>
    
    )

}

export default AddTodo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

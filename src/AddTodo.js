import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import { Input, Button, Text } from 'react-native-elements';
import { List } from 'react-native-paper';

const AddTodo = (props) => {
    const [todo, setTodo] = useState({title:'', date: '', category: '', description: ''})
    const [expanded, setExpanded] = useState(true)
    const {navigate} = props.navigation

const add = () => {
    firebase.database().ref('items/').push(
        {'title': todo.title, 'date': todo.date, 'category': todo.category, 'description': todo.description}
    )
    navigate('TodoAll')
}

_handlePress = () => {
    setExpanded(!expanded);
}

selectListItem = (value) => {
    setTodo({...todo, category: value}) value={todo.category}
}

return (

    <View style={styles.container}>

        <Text style={{fontSize: 20, color: '#2089dc', marginTop: 25}}>Add to Todo List</Text>

        <Input inputStyle={{marginTop:15}} placeholder='Todo'
            onChangeText={value => setTodo({...todo, title: value})} value={todo.title}/>

        <Input inputStyle={{marginTop:10}} placeholder='Date'
        onChangeText={value => setTodo({...todo, date: value})} value={todo.date}/>

        <List.Section>
            <List.Accordion
                title='Category'
                expanded={!expanded}
                onPress={() => _handlePress()}
            >
                <List.Item 
                    title='Work' 
                    value='work'
                    onPress={() => selectListItem(value)}    
                />
                    
                <List.Item 
                    title='School'
                    value='school'
                    onPress={value => setTodo({...todo, category: value})} value={todo.category} 
                />

                <List.Item 
                    title='Home'
                    value='home'
                    onPress={value => setTodo({...todo, category: value})} value={todo.category} 
                />

            </List.Accordion>
        </List.Section>

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

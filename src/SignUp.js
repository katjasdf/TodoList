import React, { useState, useCallback } from 'react';
import { StyleSheet, TextInput, View, Button, KeyboardAvoidingView } from 'react-native';
import firebase from './components/firebase'

const SignUp = (props) => {
  const [name, setName] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {navigate} = props.navigation

  const createUser = useCallback(() => {
    firebase.auth().createUserWithEmailAndPassword(name, email, password) {

    }
  }

  //  email.updateProfile({displayName: {name}})

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View style={styles.container}>
      
       <TextInput
        style={{ width: 300,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20}}
        placeholder={'Name'}
        onChangeText={name => setName(name)}
        value={String(name)}/>

       <TextInput
        style={{ width: 300,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20}}
        placeholder={'Email'}
        onChangeText={email => setEmail(email)}
        value={String(email)}/>

        <TextInput
        style={{ width: 300,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 50,}}
        placeholder={'Password'}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}/>

        <Button
        title={'Sign up'}
        onPress={() => navigate('LogIn')}
        />

        <Button
        title={'Log in'}
        onPress={() => navigate('LogIn')}
        />
        
    </View>
    </KeyboardAvoidingView>
  );
}

SignUp.navigationOptions = ({navigate}) => ({title: null, header: null })

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useState, useCallback } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import firebase from './components/firebase'
import { TextInput, Button, Colors } from 'react-native-paper';

const SignUp = (props) => {
  const [name, setName] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {navigate} = props.navigation

  const createUser = useCallback(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
                user.updateProfile({
                    displayName: {name}
                })
        })
        .then(navigate('LogIn'))
        .catch(() => {
      
    })
  }, [name, email, password])

  return (
    
    <View style={styles.container}>
        <View style={{width: '90%'}}>
            <TextInput
                style={{margin: 10, backgroundColor: 'white'}}
                label='Name'
                placeholder='John Snow'
                theme={{ colors: { primary: Colors.blue500 }}}
                onChangeText={name => setName(name)}
                value={String(name)}/>

            <TextInput
                style={{margin: 10, backgroundColor: 'white'}}
                label='Email'
                placeholder='john@snow.com'
                theme={{ colors: { primary: Colors.blue500 }}}
                onChangeText={email => setEmail(email)}
                value={String(email)}/>

            <TextInput
                style={{margin: 10, backgroundColor: 'white'}}
                label='Password'
                placeholder='shhh'
                theme={{ colors: { primary: Colors.blue500 }}}
                onChangeText={password => setPassword(password)}
                secureTextEntry={true}/>
            
            <Button
                style={{borderRadius: 666, marginTop: 60}}
                contentStyle={{height: 50}}
                mode='contained'
                uppercase={false}
                color={Colors.blue500}
                onPress={() => createUser()}>
                Sign up
                </Button>

            <Button
                style={{borderRadius: 666, marginTop: 30}}
                contentStyle={{height: 50}}
                uppercase={false}
                color={Colors.blue500}
                onPress={() => navigate('LogIn')}>
                Already have an account? Log in
                </Button>
        </View>
    </View>
  );
}

SignUp.navigationOptions = ({navigate}) => ({title: null, header: null })

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

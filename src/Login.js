import React, { useState, useCallback } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import firebase from './components/firebase'
import { TextInput, Button, Colors } from 'react-native-paper'

const LogIn = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {navigate} = props.navigation

  const loginUser = useCallback(() => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      navigate('Dashboard', {email: email})
    }).catch(() => {
      
    })
  }, [email, password])

  return (
    
    <View style={styles.container}>
        <View style={{width: '90%'}}>
            <TextInput
              style={{margin: 10, backgroundColor: 'white'}}
              label='Email'
              placeholder='john@snow.com'
              value='katja.hinkkanen@outlook.com'
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
              onPress={() => loginUser()}>
              Log in  
            </Button>

            <Button
              style={{borderRadius: 666, marginTop: 30}}
              contentStyle={{height: 50}}
              uppercase={false}
              color={Colors.blue500}
              onPress={() => navigate('SignUp')}>
              Don't have an account yet? Sign up
            </Button>

        </View>
    </View>
  );
}

LogIn.navigationOptions = ({navigate}) => ({title: null, header: null})

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

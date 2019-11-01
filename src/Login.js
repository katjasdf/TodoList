import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const LogIn = (props) => {
  const [user, setUser] = useState('')
  const {navigate} = props.navigation

  return (
    <View style={styles.container}>
       <TextInput
        style={{ width: 300,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20}}
        placeholder={'Username'}
        onChangeText={user => setUser(user)}
        value={String(user)}/>

        <TextInput
        style={{ width: 300,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 50,}}
        placeholder={'Password'}
        secureTextEntry={true}/>

        <Button
        title={'Log in'}
        onPress={() => navigate('Dashboard', {user: user})}
        />
        
    </View>
  );
}

LogIn.navigationOptions = ({navigate}) => ({title: 'Todo list'})

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

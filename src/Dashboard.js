import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const Dashboard = (props) => {
  const { params } = props.navigation.state

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} /> 
       <Text style={{fontSize:35, marginLeft:20, marginTop:60}}>Hello {params.user} !</Text>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

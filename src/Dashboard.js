import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Dashboard = (props) => {
  const { params } = props.navigation.state
  const { navigate } = props.navigation

  return (
    <View style={styles.container}>
      <Text style={{fontSize:35, marginLeft:20, marginTop:60}}>Hello {params.user} !</Text>
      <Button
        title='Show all Todos'
        onPress={() => navigate('TodoAll')}
        />
    </View>
  );
}

Dashboard.navigationOptions = ({navigate}) => ({title: 'Dashboard'})

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

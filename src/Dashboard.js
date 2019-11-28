import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

const Dashboard = (props) => {
  const { params } = props.navigation.state
  const { navigate } = props.navigation

  return (
    <View style={styles.container}>
      <View style={styles.rowcontainer}>
          <Text style={{fontSize:35, marginLeft:20}}>Hello {params.user} !</Text>
      </View>
      <View style={styles.maincontainer}>
        <Button
          title='Show all Todos'
          onPress={() => navigate('TodoAll')}
          />
      </View>
    </View>
  );
}

Dashboard.navigationOptions = ({navigate}) => ({title: null})

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  rowcontainer: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    justifyContent: 'space-around',
  },
  maincontainer: {
    flex: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import firebase from './components/firebase'

const Dashboard = (props) => {
  const { params } = props.navigation.state
  const { navigate } = props.navigation
  const [id, setId] = useState([]);
  const [list, setList] = useState([]);
  const [home, setHome] = useState(0);
  const [work, setWork] = useState(0);
  const [school, setSchool] = useState(0);

  React.useEffect(() => {
    firebase.database().ref('items/').on('value', snapshot => {
      const data = snapshot.val ();
      const prods = Object.values(data);
      const keys = Object.keys(data);
      setList(prods);
      setId(keys);
    });
   // calculateCategory();
  }, []
  );

 /* const calculateCategory = () => {
    
      console.log(Object.values(list[1]));

      let lschool = 0;
      let lwork = 0;
      let lhome = 0;

      for(i = 0; i < Object.keys(id).length; i++) {
        if (Object.values(list[i]).category = 'Home') {
          lhome++;
        } else if (Object.values(list[i]).category = 'Work') {
          lwork++;
        } else if (Object.values(list[i]).category = 'School') {
          lschool++;
        }
      }
      setHome(lhome);
      setWork(lwork);
      setSchool(lschool);
  } */

  return (

      <View style={styles.container}>
            <Text style={{fontSize:35, marginLeft:20}}>Hello {params.user} !</Text>
        <ScrollView style={styles.todoContainer}>
            <View style={styles.todoRow}>
                <TouchableOpacity style={styles.btn} onPress={() => navigate('TodoAll')}>
                    <View style={styles.absoluteView}>
                        <Icon name='clipboard' type="feather" color='#5bb8eb' size={30} marginBottom={15}/>
                        <Text style={styles.todoname}>All todos</Text>
                        <Text style={styles.items}>{Object.keys(id).length} tasks</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigate('TodoAll')}>
                    <View style={styles.absoluteView}>
                        <Icon name='briefcase' type="feather" color='#5bb8eb' size={30} marginBottom={15}/>
                        <Text style={styles.todoname}> Work</Text>
                        <Text style={styles.items}>{work} tasks</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.todoRow}>
                <TouchableOpacity style={styles.btn} onPress={() => navigate('TodoAll')}>
                    <View style={styles.absoluteView}>
                        <Icon name='book' type="feather" color='#5bb8eb' size={30} marginBottom={15}/>
                        <Text style={styles.todoname}>School</Text>
                        <Text style={styles.items}>{school} tasks</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigate('TodoAll')}>
                    <View style={styles.absoluteView}>
                        <Icon name='home' type="feather" color='#5bb8eb' size={30} marginBottom={15}/>
                        <Text style={styles.todoname}>Home</Text>
                        <Text style={styles.items}>{home} tasks</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
  );
}

Dashboard.navigationOptions = ({navigate}) => ({title: null, header: null})

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    marginTop: 150,
  },
  todoContainer: {
    flex: 1,
    marginTop: 50,
    marginLeft: 15
  },
  todoRow: {
    flexDirection: 'row',
  },
  btn: {
    height: 180, 
    width: 180, 
    borderRadius: 10, 
    backgroundColor: 'white',
    borderColor: '#f5f5f5',
    borderWidth: 1,
    shadowColor: 'rgba(0,0,0, .1)', // IOS
    shadowOffset: { height: 3, width: 2 }, // IOS
    shadowOpacity: 3, // IOS
    shadowRadius: 1, //IOS
    elevation: 3,
    marginBottom: 20,
    marginRight: 20,
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginTop: 70,
  },
  todoname: {
    fontSize: 20,
    color: 'black',
  },
  items: {
    fontSize: 16,
    color: '#bfbfbf',
    marginTop: 3,
  },

});

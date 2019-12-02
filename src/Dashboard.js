import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { FAB, Colors } from 'react-native-paper';
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
  calculateCategory()
  }, []
  );

  const calculateCategory = () => {

      let lschool = 0;
      let lwork = 0;
      let lhome = 0;

      for(i = 0; i < Object.keys(id).length; i++) {
        if (Object.values(list)[i].category == 'Home') {
          lhome = lhome + 1;
        } else if (Object.values(list)[i].category == 'Work') {
          lwork = lwork + 1;
        } else if (Object.values(list)[i].category == 'School') {
          lschool = lschool + 1;
        }
      }
      setHome(lhome);
      setWork(lwork);
      setSchool(lschool);
  }

  return (

      <View style={styles.container}>
            <Text style={{fontSize:35, marginLeft:20}}>Hello {params.user} !</Text>
        <ScrollView style={styles.todoContainer}>
            <View style={styles.todoRow}>
                <TouchableOpacity style={styles.btn} onPress={() => navigate('TodoAll')}>
                    <View style={styles.absoluteView}>
                        <Icon name='clipboard' type="feather" color='#2196f3' size={30} marginBottom={15}/>
                        <Text style={styles.todoname}>All todos</Text>
                        <Text style={styles.items}>{Object.keys(id).length} tasks</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigate('TodoAll')}>
                    <View style={styles.absoluteView}>
                        <Icon name='briefcase' type="feather" color='#2196f3' size={30} marginBottom={15}/>
                        <Text style={styles.todoname}>Work</Text>
                        <Text style={styles.items}>{work} tasks</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.todoRow}>
                <TouchableOpacity style={styles.btn} onPress={() => navigate('TodoAll')}>
                    <View style={styles.absoluteView}>
                        <Icon name='book' type="feather" color='#2196f3' size={30} marginBottom={15}/>
                        <Text style={styles.todoname}>School</Text>
                        <Text style={styles.items}>{school} tasks</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigate('TodoAll')}>
                    <View style={styles.absoluteView}>
                        <Icon name='home' type="feather" color='#2196f3' size={30} marginBottom={15}/>
                        <Text style={styles.todoname}>Home</Text>
                        <Text style={styles.items}>{home} tasks</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>

        <FAB 
          style={styles.fab}
          big
          icon="plus"
          onPress={() => navigate('AddTodo')}
        />

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
  
  fab: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: 30,
    bottom: 30,
    backgroundColor: Colors.blue500
  }, 

});

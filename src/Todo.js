import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Subheading, Caption, Icon } from 'react-native-paper';

const Todo = (props) => {
    const { params } = props.navigation.state
    const [icon, setIcon] = useState('book');

  /*  React.useEffect(() => {
        
    if (params.category == 'Work') {
        setIcon('briefcase')
    } else if (params.category == 'School') {
        setIcon('book')
    } else if (params.category == 'Home') {
        setIcon('home')
    }

    }, []
    ); */

    return (

    <View style={styles.container}>
    <Subheading>{params.date} {params.time}</Subheading>
    <Headline>{params.title}</Headline>
    <Caption>{params.description}</Caption>
    </View>

    )

}

Todo.navigationOptions = ({navigate}) => ({title: null})

export default Todo;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      marginTop: 100,
      marginLeft: 20,
    },
});

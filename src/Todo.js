import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Subheading, Caption } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const icons = {
    Work: 'briefcase',
    School: 'book',
    Home: 'home'
}

const Todo = (props) => {
    const { params } = props.navigation.state

    const icon = icons[params.category]

    return (

    <View style={styles.container}>
    <Subheading>{params.date} {params.time}</Subheading>
    <Headline>{params.title}</Headline>
    <Caption>{params.description}</Caption>
    <Icon name={icon} type="feather" color='#2196f3' size={30}/>
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

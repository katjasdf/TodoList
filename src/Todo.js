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
    <Subheading style={{fontSize: 20, paddingBottom: 15}}>{params.date} {params.time}</Subheading>

    <View style={styles.rowView}>
    <Icon 
        name={icon} 
        type="feather" 
        color='#2196f3' 
        size={30}/>
    <Headline style={{fontSize: 25, paddingLeft: 20}}>{params.title}</Headline>
    </View>

    <Caption style={{fontSize: 16}}>{params.description}</Caption>
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
        marginLeft: 30,
        marginRight: 15,
    },
    rowView: {
        flexDirection: 'row',
        paddingBottom: 30
    }
});

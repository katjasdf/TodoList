import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Login from './src/Login'
import Dashboard from './src/Dashboard'
import TodoAll from './src/TodoAll'
import AddTodo from './src/AddTodo'

const AppStack = createStackNavigator({ 
    Dashboard: Dashboard, 
    TodoAll: TodoAll, 
    AddTodo: AddTodo},
  { 
    navigationOptions: {
      headerStyle: { borderBottomWidth: 0 }
    }
  });

const AuthStack = createStackNavigator({ LogIn: Login });

const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer/>
  )
}
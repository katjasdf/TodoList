import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Login from './src/Login'
import Dashboard from './src/Dashboard'
import TodoList from './src/TodoList'
import AddTodo from './src/AddTodo'
import Todo from './src/Todo'
import SignUp from './src/SignUp'

const AppStack = createStackNavigator({ 
    Dashboard: Dashboard, 
    TodoList: TodoList, 
    AddTodo: AddTodo,
    Todo: Todo},
  { 
    navigationOptions: {
      headerStyle: { borderBottomWidth: 0 }
    }
  });

const AuthStack = createStackNavigator({ LogIn: Login, SignUp: SignUp });

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
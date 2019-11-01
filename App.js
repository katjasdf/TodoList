import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Login from './src/Login'
import Dashboard from './src/Dashboard'

const AppStack = createStackNavigator({ Dashboard: Dashboard});
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
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './scr/screens/IndexScreen'
import { Provider as BlogProvider } from './scr/context/BlogContext';
import ShowScreen from './scr/screens/ShowScreen';
import CreateScreen from './scr/screens/CreateScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Detail: ShowScreen,
  Create: CreateScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>
}
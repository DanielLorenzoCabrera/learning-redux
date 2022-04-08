import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './components/About';
import {Todo} from './components/Todo';
import {
  WebpackItem,
  ReactItem,
  ReduxItem,
  LodashItem,
  ThunkItem,
  EslintItem,
  BabelItem,
  AxiosItem,
} from './components/LibraryItems';

import Home from './components/Home';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import actions from './actions';

const Stack = createNativeStackNavigator();

class RootComponent extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="home"
              component={Home}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name="todo"
              component={Todo}
              options={{title: 'To do List', headerBackVisible: false}}
            />
            <Stack.Screen
              name="webpack"
              component={WebpackItem}
              options={{title: 'Webpack'}}
            />
            <Stack.Screen
              name="react"
              component={ReactItem}
              options={{title: 'React'}}
            />
            <Stack.Screen
              name="redux"
              component={ReduxItem}
              options={{title: 'Redux'}}
            />
            <Stack.Screen
              name="lodash"
              component={LodashItem}
              options={{title: 'Lodash'}}
            />
            <Stack.Screen
              name="thunk"
              component={ThunkItem}
              options={{title: 'Thunk'}}
            />
            <Stack.Screen
              name="eslint"
              component={EslintItem}
              options={{title: 'Eslint'}}
            />
            <Stack.Screen
              name="babel"
              component={BabelItem}
              options={{title: 'Babel'}}
            />
            <Stack.Screen
              name="axios"
              component={AxiosItem}
              options={{title: 'Axios'}}
            />
            <Stack.Screen
              name="about"
              component={About}
              options={{title: 'About', headerBackVisible: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    actual_screen: state.actual_screen,
  };
};

export default connect(mapStateToProps, actions)(RootComponent);

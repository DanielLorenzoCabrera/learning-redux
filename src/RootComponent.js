import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LibraryList from './components/LibraryList';
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
const Stack = createNativeStackNavigator();

const RootComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LibraryList"
          component={LibraryList}
          options={{title: 'Home'}}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootComponent;

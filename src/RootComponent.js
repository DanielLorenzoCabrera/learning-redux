import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LibraryList from "./components/LibraryList";
import { WebpackItem, ReactItem , ReduxItem} from "./components/LibraryItems";
const Stack = createNativeStackNavigator();

const RootComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LibraryList"
          component={LibraryList}
          options={{ title: 'Home' }}
        />
          <Stack.Screen
            name="webpack"
            component={WebpackItem}
            options={{ title: 'Webpack' }}
          />
          <Stack.Screen
            name="react"
            component={ReactItem}
            options={{ title: 'React' }}
          />
          <Stack.Screen
            name="redux"
            component={ReduxItem}
            options={{ title: 'Redux' }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootComponent
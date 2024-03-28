import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import { Icon } from 'react-native-elements';
import Add from './src/screens/Add';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon
                name='add-outline'
                type='ionicon'
                color='#000000'
                onPress={() => navigation.navigate('Add') }
              />
            ),
          })}
        />
        
        <Stack.Screen name="Add"
          component={Add}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
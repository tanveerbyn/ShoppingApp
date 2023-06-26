import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Store/store';
import CounterProvider from './src/Store/CounterProvider';
// import Counter from './src/Routes/MainHome/Home';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './src/routes/Homescreen/Home';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Counter from './src/routes/CounterScreen/Counter';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <CounterProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <SafeAreaView
              style={{
                backgroundColor: 'white',
                flex: 1,
              }}>
              <Stack.Navigator>
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Counter"
                  component={Counter}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            </SafeAreaView>
          </NavigationContainer>
        </GestureHandlerRootView>
      </CounterProvider>
    </Provider>
  );
};

export default App;

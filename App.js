import {mainReducer} from './src/reducers';
import mainSaga from './src/sagas';
import {SignIn} from './src/screens/SignIn';
import {FamilyMemberSelection} from './src/screens/FamilyMemberSelection';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import React from 'react';
import {MemberTimeDetails} from './src/screens/MemberTimeDetails';
import {MemberData} from './src/screens/MemberData';
import {MoreData} from './src/screens/MoreData';
import {sleepApplicationRoute} from './src/enums';

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
  const Stack = createStackNavigator();
  sagaMiddleware.run(mainSaga);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={sleepApplicationRoute.signIn} component={SignIn} />
            <Stack.Screen name={sleepApplicationRoute.familyMemberSelection} component={FamilyMemberSelection} />
            <Stack.Screen name={sleepApplicationRoute.memberTimeDetails} component={MemberTimeDetails} />
            <Stack.Screen name={sleepApplicationRoute.memberData} component={MemberData} />
            <Stack.Screen name={sleepApplicationRoute.moreData} component={MoreData} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

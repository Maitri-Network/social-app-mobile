import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { View, StyleSheet } from 'react-native';
import FlashMessage from "react-native-flash-message";
import { MenuProvider } from 'react-native-popup-menu';
import { NativeBaseProvider } from 'native-base';
// import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './store/reducers/auth';
import postsReducer from './store/reducers/posts';
import usersReducer from './store/reducers/users';
import chatReducer from './store/reducers/chat';
import AppNavigator from './navigation/AppNavigator';

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});


const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  users: usersReducer,
  chat: chatReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
  // composeWithDevTools()
);

export default function App() {

  return (
      <View style={styles.container}>
    <Provider store={store}>
      <NativeBaseProvider>
        <MenuProvider>
          <AppNavigator  />
        </MenuProvider>
        <FlashMessage position="top" />
      </NativeBaseProvider>
    </Provider>
      </View>
  );
}


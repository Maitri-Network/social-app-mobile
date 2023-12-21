import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import FlashMessage from "react-native-flash-message";
import { MenuProvider } from 'react-native-popup-menu';
// import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './store/reducers/auth';
import postsReducer from './store/reducers/posts';
import usersReducer from './store/reducers/users';
import chatReducer from './store/reducers/chat';
import AppNavigator from './navigation/AppNavigator';
import {Image} from "react-native";

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
    <Provider store={store}>
      {/*<Image source={require('../../assets/bg-auth.png')} />*/}

      {/*<Image style={{width:'100%'}} source={require('./assets/splash2.png')} />*/}
      <Image
        style={{ width: "300", height: "300" }}
        source={{
          uri: "file:///data/data/com.example.maitridemo/cache/social-app/7b1b610118ddf4a12bacfe11cbc0629e.png",
        }}
      />
      {/*<MenuProvider>*/}
      {/*  <AppNavigator  />*/}
      {/*</MenuProvider>*/}
      {/*<FlashMessage position="top" />*/}
    </Provider>
  );
}

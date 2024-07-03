import React, { useEffect } from "react";
import Root from "./Root";
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { COLORS } from "./constants";
import { PersistGate } from "redux-persist/integration/react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <GestureHandlerRootView  style={{flex:1}}>
          <Root />
          </GestureHandlerRootView>
        </NavigationContainer>
      </PersistGate>

    </Provider>
  )
}

export default App;


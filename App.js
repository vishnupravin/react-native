import {createNativeStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import VerifyOtp from './src/VerifyOtp';
import SplashScreen from './src/SplashScreen';
import SignInComponent from './src/SignInComponent';
import DrawerNavigatorRoutes from './src/DrawerNavigatorRoutes';
import OrderHistory from './src/OrderHistory';
import OrderHistory2 from './src/OrderHistory2';
import LocationDetails from './src/LocationDetails';
import Branch from './src/Branch';
import UpdatePage from './src/UpdatePage';
import frontpage from './src/frontpage';
import LocalConfig from './LocalConfig';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';
import TermsOfUse from './src/TermsOfUse';
import DeliveryPolicy from './src/DeliveryPolicy';
import Aboutus from './src/Aboutus';
newFunction();
const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="SignInComponent">
      <Stack.Screen
        name="SignInComponent"
        component={SignInComponent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  const [initialRoute, setInitialRoute] = useState('SplashScreen');
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: LocalConfig.COLOR.WHITE,
      text: '#333333',
    },
  };
  return (
    <Provider store={Store}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: LocalConfig.COLOR.WHITE,
        }}>
        <StatusBar
          animated={true}
          backgroundColor={LocalConfig.COLOR.WHITE}
          barStyle="dark-content"
          hidden={false}
        />
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="VerifyOtp"
                component={VerifyOtp}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Auth"
                component={Auth}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Aboutus"
                component={Aboutus}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="DrawerNavigatorRoutes"
                component={DrawerNavigatorRoutes}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="OrderHistory"
                component={OrderHistory}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="OrderHistory2"
                component={OrderHistory2}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="LocationDetails"
                component={LocationDetails}
                options={{
                  headerShown: false,
                  ...TransitionPresets.SlideFromRightIOS,
                }}
              />
              <Stack.Screen
                name="Branch"
                component={Branch}
                options={{
                  headerShown: false,
                  ...TransitionPresets.SlideFromRightIOS,
                }}
              />
              <Stack.Screen
                name="frontpage"
                component={frontpage}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="UpdatePage"
                component={UpdatePage}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="TermsOfUse"
                component={TermsOfUse}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="DeliveryPolicy"
                component={DeliveryPolicy}
                options={{headerShown: false}}
              />
              {/* <Stack.Screen
              name="Aboutus"
              component={Aboutus}
              options={{headerShown: false}}
            /> */}
            </Stack.Navigator>
            {/* <BottomMenu /> */}
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaView>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LocalConfig.COLOR.WHITE,
  },
});
export default App;
function newFunction() {
  LogBox.ignoreLogs(['Reanimated 2']);
}

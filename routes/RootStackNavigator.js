import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Splash';
import SignInScreen from '../screens/Login';
import SignUpScreen from '../screens/Register';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
	<RootStack.Navigator headerMode="none">
		<RootStack.Screen name="SplashScreen" component={SplashScreen} />
		<RootStack.Screen name="SignInScreen" component={SignInScreen} />
		<RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
	</RootStack.Navigator>
);

export default RootStackScreen;

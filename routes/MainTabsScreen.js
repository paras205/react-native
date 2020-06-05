import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import HomeScreen from '../screens/Home';
import ProductScreen from '../screens/Products';

const HomeStack = createStackNavigator();
const ProductStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: '#009387'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
				textTransform: 'uppercase'
			},
			headerTitleAlign: 'center'
		}}
	>
		<HomeStack.Screen
			name="Home"
			component={HomeScreen}
			options={{
				headerLeft: () => (
					<Icon.Button
						name="ios-menu"
						size={25}
						backgroundColor="#009387"
						onPress={() => {
							navigation.openDrawer();
						}}
					/>
				)
			}}
		/>
	</HomeStack.Navigator>
);

const ProductStackScreen = ({ navigation }) => (
	<ProductStack.Navigator>
		<ProductStack.Screen name="Products" component={ProductScreen} />
	</ProductStack.Navigator>
);

const MainTabsScreen = () => (
	<Tab.Navigator initialRouteName="Home" activeColor="#fff">
		<Tab.Screen
			name="Home"
			component={HomeStackScreen}
			options={{
				tabBarLabel: 'Home',
				tabBarColor: '#009387',
				tabBarIcon: ({ color }) => <Icon name="ios-home" color={color} size={26} />
			}}
		/>
		<Tab.Screen
			name="Products"
			component={ProductStackScreen}
			options={{
				tabBarLabel: 'Product',
				tabBarColor: '#009387',
				tabBarIcon: ({ color }) => <Fontisto name="shopping-bag-1" color={color} size={26} />
			}}
		/>
	</Tab.Navigator>
);

export default MainTabsScreen;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { loadUser } from '../store/actions/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabsScreen from './MainTabsScreen';
import RootStackScreen from './RootStackNavigator';
import DrawerConent from './DrawerContent';

const Drawer = createDrawerNavigator();

const Routes = (props) => {
	useEffect(() => {
		const authenticate = async () => {
			const token = await AsyncStorage.getItem('token');
			if (!token) {
				props.navigation.navigate('SignInScreen');
				return;
			}
			props.loadUser(token);
		};
		authenticate();
	}, []);
	return (
		<NavigationContainer>
			{props.auth.isAuthenticated ? (
				<Drawer.Navigator drawerContent={(props) => <DrawerConent {...props} />}>
					<Drawer.Screen name="HomeDrawer" component={MainTabsScreen} />
				</Drawer.Navigator>
			) : (
				<RootStackScreen />
			)}
		</NavigationContainer>
	);
};
const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};
export default connect(mapStateToProps, { loadUser })(Routes);

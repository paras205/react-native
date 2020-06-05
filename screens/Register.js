import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { register } from '../store/actions/auth';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Register = ({ navigation, register }) => {
	const [ data, setData ] = React.useState({
		name: '',
		email: '',
		password: '',
		passwordConfrim: '',
		check_textInputChange: false,
		check_nameInputChange: false,
		secureTextEntry: true,
		confirm_secureTextEntry: true
	});
	const nameInputChange = (val) => {
		if (val.length !== 0) {
			setData({
				...data,
				name: val,
				check_nameInputChange: true
			});
		} else {
			setData({
				...data,
				name: val,
				check_nameInputChange: false
			});
		}
	};
	const textInputChange = (val) => {
		if (val.length !== 0) {
			setData({
				...data,
				email: val,
				check_textInputChange: true
			});
		} else {
			setData({
				...data,
				email: val,
				check_textInputChange: false
			});
		}
	};
	const handlePasswordChange = (val) => {
		setData({
			...data,
			password: val
		});
	};
	const handleConfirmPasswordChange = (val) => {
		setData({
			...data,
			passwordConfrim: val
		});
	};
	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry
		});
	};
	const updatePasswordConfrimSecureTextEntry = () => {
		setData({
			...data,
			confirm_secureTextEntry: !data.confirm_secureTextEntry
		});
	};
	const { email, password, passwordConfrim, name } = data;
	const registerHandler = () => {
		let dataToSend = {
			name,
			email,
			password,
			passwordConfrim
		};
		register(dataToSend);
	};
	return (
		<ScrollView style={styles.container}>
			<StatusBar backgroundColor="#009387" barStyle="light-content" />
			<View style={styles.header}>
				<Text style={styles.text_header}>Register Now!</Text>
			</View>
			<Animatable.View animation="fadeInUpBig" style={styles.footer}>
				<Text style={styles.text_footer}>Name</Text>
				<View style={styles.action}>
					<FontAwesome name="user-o" color="#05375a" size={20} />
					<TextInput
						placeholder="Your Name"
						style={styles.textInput}
						autoCapitalize="none"
						onChangeText={(val) => nameInputChange(val)}
					/>
					{data.check_nameInputChange ? (
						<Animatable.View animation="bounceIn">
							<Feather name="check-circle" color="green" size={20} />
						</Animatable.View>
					) : null}
				</View>

				<Text style={[ styles.text_footer, { marginTop: 35 } ]}>Email</Text>
				<View style={styles.action}>
					<FontAwesome name="user-o" color="#05375a" size={20} />
					<TextInput
						placeholder="Your Email"
						style={styles.textInput}
						autoCapitalize="none"
						onChangeText={(val) => textInputChange(val)}
					/>
					{data.check_textInputChange ? (
						<Animatable.View animation="bounceIn">
							<Feather name="check-circle" color="green" size={20} />
						</Animatable.View>
					) : null}
				</View>
				<Text
					style={[
						styles.text_footer,
						{
							marginTop: 35
						}
					]}
				>
					Password
				</Text>
				<View style={styles.action}>
					<Feather name="lock" color="#05375a" size={20} />
					<TextInput
						placeholder="Your Password"
						secureTextEntry={data.secureTextEntry ? true : false}
						style={styles.textInput}
						autoCapitalize="none"
						onChangeText={(val) => handlePasswordChange(val)}
					/>
					<TouchableOpacity onPress={updateSecureTextEntry}>
						{data.secureTextEntry ? (
							<Feather name="eye-off" color="green" size={20} />
						) : (
							<Feather name="eye" color="green" size={20} />
						)}
					</TouchableOpacity>
				</View>
				<Text
					style={[
						styles.text_footer,
						{
							marginTop: 35
						}
					]}
				>
					Confirm Password
				</Text>
				<View style={styles.action}>
					<Feather name="lock" color="#05375a" size={20} />
					<TextInput
						placeholder="Confrim Your Password"
						secureTextEntry={data.confirm_secureTextEntry ? true : false}
						style={styles.textInput}
						autoCapitalize="none"
						onChangeText={(val) => handleConfirmPasswordChange(val)}
					/>
					<TouchableOpacity onPress={updatePasswordConfrimSecureTextEntry}>
						{data.confirm_secureTextEntry ? (
							<Feather name="eye-off" color="green" size={20} />
						) : (
							<Feather name="eye" color="green" size={20} />
						)}
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={styles.button} onPress={registerHandler}>
						<LinearGradient colors={[ '#08d4c4', '#01ab9d' ]} style={styles.signIn}>
							<Text style={[ styles.textSign, { color: '#fff' } ]}>Sign Up</Text>
						</LinearGradient>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						style={[
							styles.signIn,
							{
								borderColor: '#009387',
								borderWidth: 1,
								marginTop: 15
							}
						]}
					>
						<Text style={[ styles.textSign, { color: '#009387' } ]}>Sign In</Text>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#009387',
		paddingTop: 40
	},
	header: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 50
	},
	footer: {
		flex: Platform.OS === 'ios' ? 3 : 5,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
		paddingBottom: 80
	},
	text_header: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 30
	},
	text_footer: {
		color: '#05375a',
		fontSize: 18
	},
	action: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2',
		paddingBottom: 5
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 0 : -12,
		paddingLeft: 10,
		color: '#05375a'
	},
	button: {
		alignItems: 'center',
		marginTop: 50
	},
	signIn: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	},
	textSign: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	textPrivate: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 20
	},
	color_textPrivate: {
		color: 'grey'
	}
});
export default connect(null, { register })(Register);

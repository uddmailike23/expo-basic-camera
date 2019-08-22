import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SettingsScreen() {
	return (
		<View style={styles.container}>
			<Text>Settings Screen</Text>
		</View>
	);
}

SettingsScreen.navigationOptions = {
	header: null
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
		</View>
	);
}

HomeScreen.navigationOptions = {
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

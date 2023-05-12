import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";

const Button = ({ title, onPress }) => {
	return (
		<View style={styles.buttonContainer}>
			<Pressable style={styles.button} onPress={onPress}>
				<Text style={styles.buttonLabel}>{title}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		width: 320,
		height: 68,
		marginHorizontal: 20,
		alignItems: "center",
		justifyContent: "center",
		padding: 3,
	},
	button: {
		borderRadius: 10,
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	buttonIcon: {
		paddingRight: 8,
	},
	buttonLabel: {
		color: "#E58F5E",
		fontSize: 16,
	},
});

export default Button;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CapitalStatus = ({ products }) => {
	// Calculate total spent and estimated profits
	const totalSpent = products.reduce(
		(total, product) => (total += product.price * product.qty),
		0
	);
	const totalEstimatedProfit = products.reduce(
		(total, product) =>
			(total += (product.estimatedValue - product.price) * product.qty),
		0
	);

	// Calculate revenue after 13% fees
	const totalRevenueAfterFees = products.reduce(
		(total, product) =>
			(total += product.estimatedValue * product.qty) * 0.87,
		0
	);

	// Calculate ROI after fees
	const roiAfterFees = (totalRevenueAfterFees / totalSpent) * 100;

	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Total Spent: ${totalSpent.toFixed(2)}
			</Text>
			<Text style={styles.text}>
				Total Estimated Profits: ${totalEstimatedProfit.toFixed(2)}
			</Text>
			<Text style={styles.text}>
				Total Revenue After Fees (13%): ${totalRevenueAfterFees.toFixed(2)}
			</Text>
			<Text style={styles.text}>
				ROI after fees: {roiAfterFees.toFixed(2)}%
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
	},
	text: {
		color: "#71B9E4",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 8,
	},
});

export default CapitalStatus;

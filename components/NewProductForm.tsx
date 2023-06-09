import React, { useState } from "react";
import {
	View,
	TextInput,
	Text,
	StyleSheet,
	ScrollView,
	Switch,
} from "react-native";
import Button from "./Button";
import { FIRESTORE_DB } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const NewProductForm = () => {
	const [itemName, setItemName] = useState("");
	const [price, setPrice] = useState("");
	const [qty, setQty] = useState("");
	const [estimatedValue, setEstimatedValue] = useState("");
	const [isCashPayment, setIsCashPayment] = useState(true);

	const handleSubmit = () => {
		// assuming `product` is an object containing the data you want to save
		const product = {
			name: itemName,
			price: Number(price),
			qty: Number(qty),
			estimatedValue: Number(estimatedValue),
			isCashPayment: isCashPayment,
			// ...
		};

		const addProduct = async () => {
			try {
				await addDoc(collection(FIRESTORE_DB, "products"), {
					product,
				});
				setItemName(""); // <-- Reset the state here
				setPrice("");
				setQty("");
				setEstimatedValue("");
				setIsCashPayment(true);
				console.log("Document successfully written!");
			} catch (error) {
				console.error("Error writing document: ", error);
			}
		};
		addProduct();
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.label}>Item Name:</Text>
			<TextInput
				style={styles.input}
				value={itemName}
				onChangeText={(text) => setItemName(text)}
			/>
			<Text style={styles.label}>Price:</Text>
			<TextInput
				style={styles.input}
				value={price}
				onChangeText={(text) => setPrice(text)}
				keyboardType="numeric"
			/>
			<Text style={styles.label}>Quantity:</Text>
			<TextInput
				style={styles.input}
				value={qty}
				onChangeText={(text) => setQty(text)}
				keyboardType="numeric"
			/>
			<Text style={styles.label}>Estimated Value:</Text>
			<TextInput
				style={styles.input}
				value={estimatedValue}
				onChangeText={(text) => setEstimatedValue(text)}
				keyboardType="numeric"
			/>
			<Text style={styles.label}>Payment Type:</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginBottom: 16,
				}}
			>
				<Text style={{ flex: 1, color: "#C0CAF4" }}>Cash</Text>
				<Switch
					value={isCashPayment}
					onValueChange={(newValue) => setIsCashPayment(newValue)}
				/>
				<Text style={{ flex: 1, color: "#C0CAF4" }}>Card</Text>
			</View>
			<Button title="Submit" onPress={handleSubmit} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 16,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
		color: "#5CC8FF",
	},
	input: {
		borderWidth: 1,
		borderColor: "#5CC8FF",
		color: "#C0CAF4",
		borderRadius: 4,
		paddingVertical: 8,
		paddingHorizontal: 12,
		marginBottom: 16,
		fontSize: 16,
	},
});

export default NewProductForm;

import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Modal } from "react-native";
import Button from "./Button";
import CapitalStatus from "./CapitalStatus";
import NewProductForm from "./NewProductForm";
import { BlurView } from "expo-blur";
import { collection, getDocs, query } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebaseConfig";

const Home = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [products, setProducts] = useState([]);
	const handleAddProduct = () => {
		setIsModalVisible(true);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			const q = query(collection(FIRESTORE_DB, "products"));
			const querySnapshot = await getDocs(q);
			let fetchedProducts = [];
			querySnapshot.forEach((doc) => {
				fetchedProducts.push(doc.data().product);
			});
			setProducts(fetchedProducts);
		};

		fetchProducts();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home</Text>
			<CapitalStatus products={products} />
			<Button title="Add Buy" onPress={handleAddProduct} />
			<Modal
				visible={isModalVisible}
				animationType="slide"
				transparent={true}
				onRequestClose={() => setIsModalVisible(false)}
			>
				<BlurView style={styles.modalBackground} intensity={10}>
					<View style={styles.modalContainer}>
						<View style={styles.modalHandle} />
						<NewProductForm />
						<Button
							title="Close"
							onPress={() => setIsModalVisible(false)}
						/>
					</View>
				</BlurView>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		color: "#71B9E4",
		fontSize: 24,
		fontWeight: "bold",
	},
	modalBackground: {
		flex: 1,
		// backgroundColor: "rgba(0, 0, 0, 0)",
		justifyContent: "flex-end",
	},
	modalContainer: {
		backgroundColor: "#16161ed9",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 20,
		paddingLeft: 20,
	},
	modalHandle: {
		alignSelf: "center",
		marginTop: 10,
		marginBottom: 10,
		width: 40,
		height: 6,
		borderRadius: 3,
		backgroundColor: "gray",
	},
});

export default Home;

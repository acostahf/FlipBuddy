import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./components/Home";

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<Home />
			</View>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1A1B26",
		paddingTop: 50,
	},
});

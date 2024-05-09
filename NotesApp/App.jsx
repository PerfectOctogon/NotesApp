import { Text } from 'react-native';
import tw from 'twrnc';

export default function App() {
	const value = "eight";

	return (
		<Text style={tw`text-blue-700 text-center mt-18 text-4xl`}>
			{value}
		</Text>
	);
}
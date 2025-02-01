import { Link } from "expo-router";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Sample</Text>
      <Link href={"/sample"}> GO to </Link>
    </View>
  );
};

export default Home;

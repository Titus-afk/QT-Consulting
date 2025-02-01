import { Link } from "expo-router";
import { Text, View } from "react-native";

const Sample = () => {
  return (
    <View>
      <Text>Sample</Text>
      <Link href={"/"}> </Link>
    </View>
  );
};

export default Sample;

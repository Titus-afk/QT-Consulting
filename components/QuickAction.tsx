import { IonicIconType } from "@expo/vector-icons/build/Ionicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text } from "react-native";

interface QuickActionProps {
  label: string;
  iconName: IonicIconType;
  onPress?: () => void;
}

const QuickAction = ({ label, onPress, iconName }: QuickActionProps) => {
  return (
    <Pressable className="flex flex-col items-center w-1/4 p-2 rounded" onPress={onPress}>
      <Ionicons name={iconName} className="bg-[#FFFFFF25] p-3 rounded-full" size={32} color={"white"} />
      <Text className="mt-3 text-white">{label}</Text>
    </Pressable>
  );
};

export default QuickAction;

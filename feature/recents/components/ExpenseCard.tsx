import { Pressable, View, Text } from "react-native";

interface ExpenseCardProps {
  companyName: string;
  category: string;
  amount: number;
  currency: string;
}

const ExpenseCard = ({ amount, category, companyName, currency }: ExpenseCardProps) => {
  return (
    <Pressable className="bg-[#FFFFFF25] p-5 rounded flex flex-row justify-between items-center">
      <View>
        <Text className="text-lg text-white">{companyName}</Text>
        <Text className="text-md text-white mt-1">{category}</Text>
      </View>
      <View>
        <Text className="text-lg font-bold text-white">
          {currency} {amount}
        </Text>
      </View>
    </Pressable>
  );
};

export default ExpenseCard;

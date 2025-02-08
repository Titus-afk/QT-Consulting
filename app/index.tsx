import { Pressable, View, Text, ScrollView, ImageBackground } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/components/ui/button";
import SearchBar from "@/feature/search-bar/components/SearchBar";
import QuickAction from "@/components/QuickAction";
import ExpenseCard from "@/feature/recents/components/ExpenseCard";

const Home = () => {
  const backgroundImage = require("../assets/images/background.jpg");

  return (
    <View className="relative">
      <ImageBackground className="absolute h-full w-full top-0" source={backgroundImage} />
      <SafeAreaView className="px-1">
        <ScrollView className="relative h-full">
          <View className="flex-1 flex-row gap-2 px-3">
            <SearchBar />
            <Pressable className="w-10 h-10 rounded-full bg-gray-400 flex justify-center items-center">
              <Text className="text-white">JS</Text>
            </Pressable>
          </View>
          <View className="flex flex-row justify-center items-center gap-2 mt-16">
            <Text className="text-white text-center text-lg opacity-50">Last Added</Text>
            <View className="w-2 h-2 bg-white rounded-full"></View>
            <Text className="text-white text-center text-lg font-bold">2 hrs ago</Text>
          </View>
          <View className="flex flex-row justify-center items-center gap-2 mt-4">
            <Text className="text-5xl text-white font-bold">CA $</Text>
            <Text className="text-5xl text-white font-bold">1,000</Text>
          </View>
          <View className="flex flex-row justify-center items-center gap-2 mt-4 bg-[#FFFFFF25] p-3 px-4 rounded-full self-center">
            <Text className="text-lg text-white">Costco Canada L.L.C</Text>
          </View>
          <View className="mt-12 flex flex-row">
            <QuickAction label="Add Expense" iconName="add" />
            <QuickAction label="Categories" iconName="albums-outline" />
            <QuickAction label="Details" iconName="add" />
            <QuickAction label="Analytics" iconName="analytics" />
          </View>
          <View className="mt-8 px-3">
            <View className="flex flex-row justify-between items-center mb-6">
              <View className="flex flex-row items-center gap-2">
                <Ionicons name="albums-outline" size={24} color="#FFFFFF" />
                <Text className="text-2xl text-white font-semibold">Recents</Text>
              </View>

              <Button variant="link">
                <ButtonText className="text-mdf text-white">View All</ButtonText>
              </Button>
            </View>

            <View className="flex flex-col gap-5">
              <ExpenseCard companyName="Sample" category="grocery" currency="CA $" amount={100.22} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

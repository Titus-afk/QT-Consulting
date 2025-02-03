import { Button, Pressable, View, Text, ScrollView, ImageBackground } from "react-native";
import { Input, InputField, InputSlot } from "@/components/ui/input";

import backgroundImage from "../assets/images/background.jpg";

import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View className="relative">
      <ImageBackground className="absolute h-[480px] w-full top-0" source={backgroundImage} />
      <SafeAreaView className="px-4">
        <ScrollView className="relative h-full">
          <View className="flex-1 flex-row gap-2">
            <Input
              className="flex-1 bg-[#FFFFFF25] text-white border-white"
              variant="rounded"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              style={{ borderColor: "#FFFFFF25" }}
            >
              <InputSlot className=" px-2 h-full mr-0">
                <Ionicons name="search" size={22} color="#FFFFFF50" />
              </InputSlot>
              <InputField className="pl-0 text-white" placeholder="Enter Text here..." style={{ color: "#FFFFFF" }} />
            </Input>
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
          <View className="mt-16 flex flex-row">
            <Pressable className="flex flex-col items-center w-1/4 p-2 rounded">
              <Ionicons name="add" className="bg-[#FFFFFF25] p-3 rounded-full" size={32} color={"white"} />
              <Text className="mt-3 text-white">Add Expense</Text>
            </Pressable>
            <Pressable className="flex flex-col items-center w-1/4 p-2 rounded">
              <Ionicons name="albums-outline" className="bg-[#FFFFFF25] p-3 rounded-full" size={32} color={"white"} />
              <Text className="mt-3 text-white">Categories</Text>
            </Pressable>
            <Pressable className="flex flex-col items-center w-1/4 p-2 rounded">
              <Ionicons name="add" className="bg-[#FFFFFF25] p-3 rounded-full" size={32} color={"white"} />
              <Text className="mt-3 text-white">Details</Text>
            </Pressable>
            <Pressable className="flex flex-col items-center w-1/4 p-2 rounded">
              <Ionicons name="analytics" className="bg-[#FFFFFF25] p-3 rounded-full" size={32} color={"white"} />
              <Text className="mt-3 text-white">Analytics</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

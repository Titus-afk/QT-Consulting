import { Button, View } from "react-native";
import { Input, InputField, InputSlot } from "@/components/ui/input";

import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="py-3 px-4 bg-red-50 flex-1 flex-row">
      <Button title="SS" />
      <Input className="flex-1" variant="rounded" size="md" isDisabled={false} isInvalid={false} isReadOnly={false}>
        <InputSlot className=" px-2 h-full mr-0">
          <Ionicons name="search" size={22} color="grey" />
        </InputSlot>
        <InputField className="pl-0" placeholder="Enter Text here..." />
      </Input>
    </SafeAreaView>
  );
};

export default Home;

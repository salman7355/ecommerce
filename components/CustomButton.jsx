import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const CustomButton = ({ text, url }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`${url}`);
      }}
      style={{
        backgroundColor: "#452ce8",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

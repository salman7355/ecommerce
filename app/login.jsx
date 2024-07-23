import { View, Text, Image, TextInput } from "react-native";

import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";

const login = () => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingTop: 50,
        gap: 50,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 170,
        }}
      >
        <Image
          style={{ width: "100%" }}
          source={require("../assets/images/quick.png")}
        />
      </View>

      <View
        style={{
          gap: 10,
          marginTop: 54,
        }}
      >
        <View
          style={{
            gap: 5,
          }}
        >
          <Text style={{ color: "#232f3f", fontSize: 12 }}>User Name</Text>
          <TextInput
            onChangeText={setUserName}
            value={userName}
            style={{
              color: "#797979",
              padding: 12,
              // width: 335,
              height: 34,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#DCDCDC",
              fontSize: 10,
            }}
            placeholder="user name"
          />
        </View>

        <View
          style={{
            gap: 5,
          }}
        >
          <Text style={{ color: "#232f3f", fontSize: 12 }}>Password</Text>
          <TextInput
            onChangeText={setPassword}
            value={Password}
            style={{
              color: "#797979",
              padding: 10,
              // width: 335,
              height: 34,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#DCDCDC",
              fontSize: 10,
            }}
            placeholder="your password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 50,
          gap: 15,
        }}
      >
        <CustomButton text={"Login"} url={"/home"} />
        <Text style={{ textAlign: "center", fontSize: 12 }}>
          Dont have an account?{" "}
          <Text
            onPress={() => {
              router.push("/register");
            }}
            style={{ color: "#1676F3" }}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default login;

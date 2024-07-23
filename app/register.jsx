import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";
import Checkbox from "expo-checkbox";

const register = () => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const [remember, setRemember] = useState(false);

  const handleRemember = () => {
    setRemember(!remember);
  };

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
        <Text style={{ textAlign: "center", fontSize: 12 }}>
          Already have an account?{" "}
          <Text
            onPress={() => {
              router.push("/login");
            }}
            style={{ color: "#1676F3" }}
          >
            Log in
          </Text>
        </Text>
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
          <Text style={{ color: "#232f3f", fontSize: 12 }}>Email</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
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
            placeholder="your email address"
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
          />
        </View>
        <View
          style={{
            gap: 5,
          }}
        >
          <Text style={{ color: "#232f3f", fontSize: 12 }}>Address</Text>
          <TextInput
            onChangeText={setAddress}
            value={address}
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
            placeholder="your address"
          />
        </View>
        <View
          style={{
            gap: 5,
          }}
        >
          <Text style={{ color: "#232f3f", fontSize: 12 }}>Mobile Number</Text>
          <TextInput
            onChangeText={setMobile}
            value={mobile}
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
            placeholder="mobile number"
          />
        </View>

        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Checkbox
            value={remember}
            style={{
              backgroundColor: "#d4d9de",
              borderRadius: 5,
              width: 15,
              height: 15,
            }}
            color="#d4d9de"
            onValueChange={handleRemember}
          />

          <Text
            style={{
              fontSize: 12,
            }}
          >
            Agree with {""}
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#452ce8",
              }}
            >
              Terms & conditions
            </Text>
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 50,
        }}
      >
        <CustomButton text={"Signup"} url={"/home"} />
      </View>
    </View>
  );
};

export default register;

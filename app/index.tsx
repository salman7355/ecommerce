import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: "center",
        gap: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          // height: "40%",
          marginTop: 100,
          flex: 1,
        }}
      >
        <Image
          source={require("../assets/images/gettingstarted.png")}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>

      <View
        style={{
          flex: 0.5,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Welcome to Quick Cart
        </Text>
        <Text
          style={{
            fontSize: 14,
            alignSelf: "center",
            textAlign: "center",
            color: "#67646d",
            width: 270,
          }}
        >
          Your one-stop destination for hassle-free online shopping
        </Text>
      </View>

      <View
        style={{
          width: 335,
          height: 50,
        }}
      >
        <CustomButton text="Get Started" url={"register"} />
      </View>
    </View>
  );
}

import { styles } from "@/styles/auth.styles";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>HELLO</Text>

      <Link href={"/notifications"}>visit Notifications</Link>
    </View>
  );
}

import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="font-rubik-bold text-primary-300">Hello fa</Text>
      <Link href="/">Go to Home index</Link>
      <Link href="/explore">Go to Explore</Link>
      <Link href="/profile">Go to Profile</Link>
      <Link href="/properties/44">Go to Properties 44</Link>
    </View>
  );
}

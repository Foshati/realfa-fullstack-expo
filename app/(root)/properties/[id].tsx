import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
export default function Properties() {
    const {id}= useLocalSearchParams()
  return (
    <View>
      <Text>Properties {id}</Text>
    </View>
  )
}
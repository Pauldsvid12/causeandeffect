import { Text, View } from "react-native";
import { CustomText } from '../components/ui/CustomText';
import { CustomButton } from '../components/ui/CustomButton';

import "./global.css";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, Radius, Typography } from "../theme";

type UiButtonProps = PressableProps & { text: string };

export function UiButton({ text, ...props }: UiButtonProps) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 62,
    borderRadius: Radius.r16,
    backgroundColor: Colors.primary,
  },
  text: {
    ...Typography.Button,
    color: Colors.white,
  },
});

import { Image, StyleSheet, Text, View } from "react-native";
import { UiButton } from "./shared/Button/Button";
import { Colors, Typography } from "./shared/theme";

const image = require("./assets/welcome.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover"></Image>
      <View style={styles.description}>
        <Text style={styles.title}>
          {"Одно из самых \n вкусных кофе в \n городе!"}
        </Text>
        <Text style={styles.caption}>
          {"Свежие зёрна, настоящая арабика и \n бережная обжарка"}
        </Text>
        <UiButton text="Начать" style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background.black,
  },
  image: {
    height: "70%",
    width: "100%",
  },
  description: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  title: {
    ...Typography.h1,
    color: Colors.Text.white,
    textAlign: "center",
    paddingBottom: 8,
  },
  caption: {
    ...Typography.textM,
    color: Colors.Text.grey,
    textAlign: "center",
    paddingBottom: 24,
  },
  button: {
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
});

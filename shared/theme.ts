import { StyleSheet } from "react-native";

export const Colors = {
  white: "#FFFFFF",
  black: "#000000",
  primary: "#C67C4E",

  Text: {
    white: "#FFFFFF",
    black: "#2F2D2C",
    grey: "#A9A9A9",
  },

  Background: {
    black: "#000000",
  },
};

export const Radius = {
  r16: 16,
};

export const Typography = StyleSheet.create({
  h1: {
    fontWeight: "600",
    fontSize: 34,
    lineHeight: 43,
  },

  textM: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
  },

  Button: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
  },
});

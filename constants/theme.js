import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#f3f8fe", // lightblue
    secondary: "#3e4685",

    // colors
    black: "#000000",
    white: "#FFFFFF",
    blue: "#3c4483",
    lightGray: "#838383",
    transparentGray: "#f3f8fe"
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Montserrat-Bold", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Montserrat-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Montserrat-SemiBold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Montserrat-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Montserrat-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
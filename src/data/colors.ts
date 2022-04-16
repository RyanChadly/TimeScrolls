export type ColorName =
  | "orange"
  | "yellow"
  | "light-green"
  | "green"
  | "light-blue"
  | "blue"
  | "grey"
  | "red"
  | "pink"
  | "purple";
export interface Color {
  name: ColorName;
  base: string;
  dark: string;
  lighter: string;
  shade: string;
  mediumDark: string;
}
export const defaultColorName: ColorName = "blue";
export const colors: Color[] = [
  {
    name: "orange",
    base: "#FF6900",
    dark: "#803500",
    lighter: "#FF974D",
    shade: "#804B26",
    mediumDark: "#CC5500",
  },
  {
    name: "yellow",
    base: "#FCB900",
    dark: "#7D5C00",
    lighter: "#FCCD4C",
    shade: "#FCCD4C",
    mediumDark: "#C99400",
  },
  {
    name: "light-green",
    base: "#7BDCB5",
    dark: "#335C4C",
    lighter: "#BDDBCF",
    shade: "#4F5C57",
    mediumDark: "#5EA88B",
  },
  {
    name: "green",
    base: "#00D084",
    dark: "#005234",
    lighter: "#3FD19B",
    shade: "#18523D",
    mediumDark: "#009E64",
  },
  {
    name: "light-blue",
    base: "#8ED1FC",
    dark: "#46687D",
    lighter: "#D9EFFC",
    shade: "#6B767D",
    mediumDark: "#71A7C9",
  },
  {
    name: "blue",
    base: "#0693E3",
    dark: "#034063",
    lighter: "#4BABE3",
    shade: "#214B63",
    mediumDark: "#0571B0",
  },
  {
    name: "grey",
    base: "#ABB8C3",
    dark: "#3A3F42",
    lighter: "#C2C2C2",
    shade: "#424242",
    mediumDark: "#7E878F",
  },
  {
    name: "red",
    base: "#EB144C",
    dark: "#6B0A24",
    lighter: "#EB5B82",
    shade: "#6B2A3B",
    mediumDark: "#B8113D",
  },
  {
    name: "pink",
    base: "#F78DA7",
    dark: "#784451",
    lighter: "#F7D7DF",
    shade: "#78686C",
    mediumDark: "#C47085",
  },
  {
    name: "purple",
    base: "#9900EF",
    dark: "#470070",
    lighter: "#B248F0",
    shade: "#532270",
    mediumDark: "#7800BD",
  },
];

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
    name: "green",
    base: "#00D084",
    dark: "#005234",
    lighter: "#3FD19B",
    shade: "#18523D",
    mediumDark: "#009E64",
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
    name: "red",
    base: "#EB144C",
    dark: "#6B0A24",
    lighter: "#EB5B82",
    shade: "#6B2A3B",
    mediumDark: "#B8113D",
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

export const colorObject = {
  orange: {
    base: "#FF6900",
    dark: "#803500",
    lighter: "#FF974D",
    shade: "#804B26",
    mediumDark: "#CC5500",
  },
  yellow: {
    base: "#FCB900",
    dark: "#7D5C00",
    lighter: "#FCCD4C",
    shade: "#FCCD4C",
    mediumDark: "#C99400",
  },
  green: {
    base: "#00D084",
    dark: "#005234",
    lighter: "#3FD19B",
    shade: "#18523D",
    mediumDark: "#009E64",
  },
  blue: {
    base: "#0693E3",
    dark: "#034063",
    lighter: "#4BABE3",
    shade: "#214B63",
    mediumDark: "#0571B0",
  },
  red: {
    base: "#EB144C",
    dark: "#6B0A24",
    lighter: "#EB5B82",
    shade: "#6B2A3B",
    mediumDark: "#B8113D",
  },
  purple: {
    base: "#9900EF",
    dark: "#470070",
    lighter: "#B248F0",
    shade: "#532270",
    mediumDark: "#7800BD",
  },
  pink: {
    base: "#FF1361",
    dark: "#7D0A2A",
    lighter: "#FF5B8C",
    shade: "#7D2A3B",
    mediumDark: "#CC0E4E",
  },
  "light-blue": {
    base: "#72DEFF",
    dark: "#2A7D9A",
    lighter: "#8CEAFF",
    shade: "#2A4B63",
    mediumDark: "#4DB8D9",
  },
  "light-green": {
    base: "#00F5D4",
    dark: "#007D5C",
    lighter: "#4BE3C9",
    shade: "#18523D",
    mediumDark: "#00BFA9",
  },
  grey: {
    base: "#E6E6E6",
    dark: "#7D7D7D",
    lighter: "#F0F0F0",
    shade: "#7D7D7D",
    mediumDark: "#B3B3B3",
  },
};

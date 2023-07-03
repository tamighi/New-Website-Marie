export type Color = "primary" | "secondary" | "text" | "surface";

export type Action = "disabled" | "hover";

export type Colors = {
  [K in Color]: string;
} & {
  [K in Action]: string;
};

export interface Palette {
  mode: "dark" | "light";
  colors: Colors;
}

export interface Theme {
  palette: Palette;
  transition?: string;
}

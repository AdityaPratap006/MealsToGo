import { DefaultTheme } from "styled-components";
import { colors, ThemeColors } from "./colors";
import { space, lineHeights, ThemeSpace, ThemeLineHeights } from "./spacing";
import { sizes, ThemeSizes } from "./sizes";
import {
    fonts,
    fontWeights,
    fontSizes,
    ThemeFonts,
    ThemeFontSizes,
    ThemeFontWeights,
} from "./fonts";

export interface AppTheme {
    colors: ThemeColors;
    space: ThemeSpace;
    lineHeights: ThemeLineHeights;
    sizes: ThemeSizes;
    fonts: ThemeFonts;
    fontSizes: ThemeFontSizes;
    fontWeights: ThemeFontWeights;
}

export const theme: DefaultTheme = {
    colors,
    space,
    lineHeights,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
};

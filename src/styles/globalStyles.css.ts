import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const innerPaddding = `${vars.padding.medium} ${vars.padding.large}`;
export const baseHeight = "100vh";

export const appContainer = style({
  display: "flex",
  height: baseHeight,
  fontFamily: "Arial, sans-serif",
  "@media": {
    "screen and (max-width: 660px)": {
      flexDirection: "column",
    },
  },
});

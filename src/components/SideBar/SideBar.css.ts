import { style } from "@vanilla-extract/css";
import { baseHeight } from "../../styles/globalStyles.css";
import { vars } from "../../styles/theme.css";

export const sidebarContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  width: "100%",
  maxWidth: "250px",
  height: baseHeight,
  backgroundColor: vars.color.sidebarBackground,
  padding: vars.padding.large,
  overflowY: "auto",
});

export const contactButton = style({
  padding: vars.padding.large,
  width: "100%",
  borderRadius: "8px",
  color: vars.color.sidebarText,
  ":hover": {
    backgroundColor: vars.color.sidebarButtonHover,
    color: vars.color.textPrimary,
  },
  ":active": {
    backgroundColor: vars.color.sidebarButtonActive,
  },
  ":focus": {
    outline: "none",
    backgroundColor: vars.color.sidebarButtonActive,
  },
});

export const contactContainer = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
});

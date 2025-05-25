import { style } from "@vanilla-extract/css";
import { baseHeight } from "../../styles/globalStyles.css";
import { vars } from "../../styles/theme.css";

export const sidebarContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  height: baseHeight,
  backgroundColor: vars.color.sidebarBackground,
  padding: vars.padding.large,
  overflowY: "auto",
});

export const contactButton = style({
  padding: vars.padding.large,
  display: "flex",
  flexDirection: "column",
  width: "300px",
  textAlign: "left",
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

  "@media": {
    "screen and (max-width: 420px)": {
      width: "200px",
    },
  },
});

export const contactContainer = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
});

export const searchInput = style({
  padding: vars.padding.medium,
  border: `1px solid ${vars.color.inputBorder}`,
  background: vars.color.inputBackground,
  color: vars.color.inputText,

  borderRadius: "4px",
});

export const lastMessageText = style({
  fontSize: "12px",
  color: vars.color.textMuted,
  textAlign: "left",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const innerButtonWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const buttonContainer = style({
  display: "flex",
  flexDirection: "column",
  marginLeft: "10px",
  flex: 1,
});

export const userPicture = style({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  marginRight: "4px",
});

export const chatsContainer = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

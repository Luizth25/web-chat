import { style } from "@vanilla-extract/css";
import { innerPaddding } from "../../styles/globalStyles.css";
import { vars } from "../../styles/theme.css";

export const chatWindow = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  "@media": {
    "screen and (max-width: 420px)": {
      height: "450px;",
    },
  },
});

export const chatHeader = style({
  padding: vars.padding.xlarge,
  background: vars.color.background,
  fontWeight: "bold",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const chatMessages = style({
  flex: 1,
  padding: vars.padding.large,
  overflowY: "auto",
  background: vars.color.surface,
});

export const message = style({
  padding: innerPaddding,
  gap: "8px",
  alignItems: "center",
  margin: "8px 0",
  display: "flex",
});

export const messageMe = style([
  message,
  {
    borderRadius: "8px 8px 20px 8px",
    backgroundColor: vars.color.messageMine,
  },
]);

export const messageMeText = style({
  width: "100%",
  textAlign: "end",
});

export const messageThem = style([
  message,
  {
    borderRadius: "8px 8px 8px 20px",
    backgroundColor: vars.color.messageTheirs,
  },
]);

export const chatInput = style({
  display: "flex",
  padding: vars.padding.large,
  background: vars.color.inputBackground,
});

export const chatInputField = style({
  flex: 1,
  padding: vars.padding.large,
  border: `1px solid ${vars.color.inputBorder}`,
  background: vars.color.inputBackground,
  color: vars.color.inputText,
  borderRadius: "4px",
});

export const chatInputButton = style({
  padding: innerPaddding,
  background: vars.color.sendButton,
  borderRadius: "4px",
  marginLeft: "12px",
  ":hover": {
    background: vars.color.sendButtonHover,
  },
});

export const timeLabel = style({
  fontSize: "0.8rem",
  color: vars.color.textMuted,
});

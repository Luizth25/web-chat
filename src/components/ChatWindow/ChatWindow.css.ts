import { style } from "@vanilla-extract/css";

export const chatWindow = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const chatHeader = style({
  padding: "10px",
  background: "#ededed",
  fontWeight: "bold",
});

export const chatMessages = style({
  flex: 1,
  padding: "10px",
  overflowY: "auto",
  background: "#fff",
});

export const message = style({
  padding: "8px 12px",
  margin: "6px 0",
  maxWidth: "60%",
  borderRadius: "8px",
});

export const messageMe = style([
  message,
  {
    backgroundColor: "#dcf8c6",
    alignSelf: "flex-end",
  },
]);

export const messageThem = style([
  message,
  {
    backgroundColor: "#e1e1e1",
    alignSelf: "flex-start",
  },
]);

export const chatInput = style({
  display: "flex",
  padding: "10px",
  background: "#f9f9f9",
});

export const chatInputField = style({
  flex: 1,
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
});

export const chatInputButton = style({
  marginLeft: "10px",
  padding: "8px 12px",
});

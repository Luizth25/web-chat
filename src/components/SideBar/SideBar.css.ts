import { style } from "@vanilla-extract/css";

export const sidebarConrainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  width: "100%",
  maxWidth: "250px",
  height: "100vh",
  backgroundColor: "#f1f1f1",
  padding: "12px",
  overflowY: "auto",
  borderRight: "1px solid #ccc",
});

export const contact = style({
  padding: "12px",
  width: "100%",
  borderRadius: "20px",
  ":hover": {
    backgroundColor: "#e0e0e0",
  },
  ":active": {
    backgroundColor: "#d0d0d0",
  },
  ":focus": {
    outline: "none",
    backgroundColor: "#d0d0d0",
  },
});

export const contactContainer = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
});

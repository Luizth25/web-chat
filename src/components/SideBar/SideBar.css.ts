import { style } from "@vanilla-extract/css";

export const sidebarConrainer = style({
  width: "250px",
  backgroundColor: "#f1f1f1",
  padding: "10px",
  borderRight: "1px solid #ccc",
});

export const contact = style({
  padding: "10px",
  cursor: "pointer",
  borderBottom: "1px solid #ddd",
  ":hover": {
    backgroundColor: "#e0e0e0",
  },
  ":active": {
    backgroundColor: "#d0d0d0",
  },
});

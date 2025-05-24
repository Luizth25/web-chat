import { createTheme, createThemeContract, style } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    // Layout geral
    background: null,
    surface: null,

    // Sidebar
    sidebarBackground: null,
    sidebarButton: null,
    sidebarButtonActive: null,
    sidebarButtonHover: null,
    sidebarText: null,

    // Mensagens
    messageMine: null,
    messageTheirs: null,
    messageText: null,

    // Input
    inputBackground: null,
    inputBorder: null,
    inputText: null,
    sendButton: null,
    sendButtonHover: null,

    // Tipografia
    text: null,
    textMuted: null,
    textPrimary: null,
  },
  font: {
    body: null,
    heading: null,
  },
  padding: {
    small: null,
    medium: null,
    large: null,
    xlarge: null,
    xxlarge: null,
    xxxlarge: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    // Layout geral
    background: "#F6F8FC",
    surface: "#FFFFFF",

    // Sidebar
    sidebarBackground: "#E7ECF7",
    sidebarButton: "#F1F4FA",
    sidebarButtonHover: "#D9E1F2",
    sidebarButtonActive: "#D9E1F2",
    sidebarText: "#222831",

    // Mensagens
    messageMine: "#DCF2EA",
    messageTheirs: "#E5EAFD",
    messageText: "#1A1A1A",

    // Input
    inputBackground: "#FFFFFF",
    inputBorder: "#CCCCCC",
    inputText: "#333333",
    sendButton: "#FF4E8E",
    sendButtonHover: "#E63C76",

    // Tipografia
    text: "#1A1A1A",
    textMuted: "#6C7A89",
    textPrimary: "#3C3E64",
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Orbitron, sans-serif",
  },
  padding: {
    small: "4px",
    medium: "8px",
    large: "12px",
    xlarge: "16px",
    xxlarge: "20px",
    xxxlarge: "32px",
  },
});

export const darkTheme = createTheme(vars, {
  color: {
    // Layout geral
    background: "#0D0D0D",
    surface: "#1A1A1A",

    // Sidebar
    sidebarBackground: "#141414",
    sidebarButton: "#1F1F1F",
    sidebarButtonHover: "#2C2C2C",
    sidebarButtonActive: "#2C2C2C",
    sidebarText: "#EEEEEE",

    // Mensagens
    messageMine: "#253135",
    messageTheirs: "#1E1E2F",
    messageText: "#F1F1F1",

    // Input
    inputBackground: "#1F1F1F",
    inputBorder: "#333333",
    inputText: "#F1F1F1",
    sendButton: "#FF3864",
    sendButtonHover: "#E52C55",

    // Tipografia
    text: "#E0E0E0",
    textMuted: "#888888",
    textPrimary: "#FF85B3",
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Orbitron, sans-serif",
  },
  padding: {
    small: "4px",
    medium: "8px",
    large: "12px",
    xlarge: "16px",
    xxlarge: "20px",
    xxxlarge: "32px",
  },
});

// Estilo base do body
export const bodyBase = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body,
  margin: 0,
});

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
    background: "#FFF3F0",
    surface: "#FFFCFA",

    // Sidebar
    sidebarBackground: "#FCE8EF",
    sidebarButton: "#FEEBED",
    sidebarButtonHover: "#FFD4DC",
    sidebarButtonActive: "#FFC7D1",
    sidebarText: "#3A0F24",

    // Mensagens
    messageMine: "#CFFAE3",
    messageTheirs: "#E6E6FA",
    messageText: "#1F1F1F",

    // Input
    inputBackground: "#FFFFFF",
    inputBorder: "#D6BFC5",
    inputText: "#333333",
    sendButton: "#FF6392",
    sendButtonHover: "#E94F7C",

    // Tipografia
    text: "#1F1F1F",
    textMuted: "#7A6B76",
    textPrimary: "#3E1131",
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
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
    background: "#0A0A1F",
    surface: "#121232",

    // Sidebar
    sidebarBackground: "#1A1A3D",
    sidebarButton: "#23234B",
    sidebarButtonHover: "#3B3B65",
    sidebarButtonActive: "#4D4D77",
    sidebarText: "#F2EAF8",

    // Mensagens
    messageMine: "#1A9799",
    messageTheirs: "#7A3BB0",
    messageText: "#FFFFFF",

    // Input
    inputBackground: "#1F1F3B",
    inputBorder: "#444466",
    inputText: "#FFFFFF",
    sendButton: "#FF4E9B",
    sendButtonHover: "#D6387D",

    // Tipografia
    text: "#EDEDED",
    textMuted: "#9A9AB2",
    textPrimary: "#EFB0FF",
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

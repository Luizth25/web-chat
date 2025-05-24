import { createTheme, createThemeContract, style } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: null,
    surface: null,
    text: null,
    textMuted: null,
    textPrimary: null,
    primary: null,
    secondary: null,
    border: null,
  },
  font: {
    body: null,
    heading: null,
  },
});

// // 🌙 Tema escuro inspirado no Japão
// export const darkTheme = createTheme(vars, {
//   color: {
//     background: "#0B0B10",
//     surface: "#1E1E24",
//     text: "#F4EADA",
//     textMuted: "#A0A0A0",
//     textPrimary: "#FFD7BA",
//     primary: "#B5332A",
//     secondary: "#A3B18A",
//     border: "#332F2E",
//   },
//   font: {
//     body: "Inter, sans-serif",
//     heading: "Poppins, sans-serif",
//   },
// });

// ☀️ Tema claro inspirado no Japão
export const lightTheme = createTheme(vars, {
  color: {
    background: "#FFF8F0",
    surface: "#FFFFFF",
    text: "#312C2A",
    textMuted: "#666666",
    textPrimary: "#3B2F2F",
    primary: "#B5332A",
    secondary: "#A3B18A",
    border: "#E5D3B3",
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
  },
});

// Estilo base do body
export const bodyBase = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body,
  margin: 0,
  minHeight: "100vh",
});

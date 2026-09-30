/* Colores de los dibujos en canvas según el tema, como "r, g, b" para usar en rgba().
   Se leen en cada fotograma: al pulsar el botón de tema, el dibujo cambia al momento.
   - gold: líneas, halos y nodos encendidos
   - ink:  estrellas y textos (marfil en oscuro, casi negro en claro)
   - muted: textos secundarios
   - sleep: mariposa convertida en constelación (líneas, estrellas y halo) */
const DARK = {
  gold: '212, 175, 55', ink: '244, 240, 235', muted: '140, 130, 115',
  bg: '#0A0A0A', surface: '#0F0E0D', dust: ['#fde047', '#fbbf24', '#ffffff'],
  sleep: { line: '#fbbf24', node: '#ffffff', glow: '#fbbf24' },
};
const LIGHT = {
  gold: '138, 106, 31', ink: '38, 33, 26', muted: '107, 98, 85',
  bg: '#F7F5F0', surface: '#FFFFFF', dust: ['#b45309', '#d97706', '#8A6A1F'],
  sleep: { line: '#8A6A1F', node: '#26211A', glow: 'rgba(138, 106, 31, 0.45)' },
};

export const isLightTheme = () => document.documentElement.classList.contains('theme-albedo');
export const canvasColors = () => (isLightTheme() ? LIGHT : DARK);

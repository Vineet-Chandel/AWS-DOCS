/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {
      colors: {
        workbook: {
          navy: '#122544',
          blue: '#316DFF',
          orange: '#FF9100',
          green: '#078B59',
          teal: '#04A6B5',
          purple: '#7057F5',
          red: '#E34444',
          bg: '#FFFFFF',
          altRow: '#F1F5F9',
          border: '#D9E2EF',
          body: '#34445A',
          muted: '#64748B',
        },
        navy: {
          950: '#0a1424',
          900: '#122544',
          850: '#162846',
          800: '#1e3860',
          700: '#274b80',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Lora',
          'Newsreader',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}

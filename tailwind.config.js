/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        meta: 'var(--meta-blue)',
        'meta-hover': 'var(--meta-blue-hover)',
        'meta-pressed': 'var(--meta-blue-pressed)',
        'dolly-bg': 'var(--dolly-bg)',
        'dolly-text': 'var(--dolly-text-primary)'
      },
      borderRadius: {
        pill: '100px',
        card: '20px'
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — derived from endocartoscope.carrd.co
        bg:             '#FAFAF8',  // warm off-white, primary background
        surface:        '#FFFFFF',  // card surfaces
        ink:            '#0D0D0B',  // near-black, primary text
        muted:          '#6B6B65',  // secondary text
        accent:         '#0499A9',  // brand teal (carrd gradient start)
        'accent-light': '#B2EBF3',  // light teal (carrd gradient end)
        'accent-dim':   'rgba(4,153,169,0.10)',
        border:         '#E8E6DF',  // subtle dividers
        dark:           '#050D10',  // hero + footer dark
        'dark-2':       '#0A1820',  // secondary dark panels
        'team-bg':      '#EDF6F8',  // light teal-tinted section bg
      },
      fontFamily: {
        // Playfair Display: prestigious academic serif (used in Nature, science journals)
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        // Space Grotesk: distinctive technical sans (NASA, deeptech startups)
        sans:  ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        // Space Mono: unambiguous technical labels and tags
        mono:  ['"Space Mono"', 'monospace'],
      },
      animation: {
        drift: 'drift 30s linear infinite',
      },
      keyframes: {
        drift: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '32px 32px' },
        },
      },
    },
  },
  plugins: [],
}

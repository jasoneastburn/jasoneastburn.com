/* eslint-disable @typescript-eslint/no-require-imports */
import colors from 'tailwindcss/colors'

module.exports = {
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
        sans: ['sans'],
      },
      colors: {
        primary: colors[Object.keys(colors)[(Math.random() * Object.keys(colors).length) | 0]],
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('--color-primary-500'),
              '&:hover': {
                color: theme('--color-primary-600'),
              },
              code: { color: theme('--color-primary-400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('--tracking-tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('--color-indigo-500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

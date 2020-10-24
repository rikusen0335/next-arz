module.exports = {
  purge: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      inset: {
        '-32': '-32px',
      }
    }
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  }
}

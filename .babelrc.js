module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ]
  ],
  plugins: ['babel-plugin-styled-components'],
  ignore: ['**/*.stories.ts{,x}', '**/*.test.ts{,x}']
}

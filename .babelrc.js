module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { browsers: ['last 2 versions'] },
        useBuiltIns: 'usage',
        debug: true, // toggle to silence verbose output
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};

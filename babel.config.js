module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset'
    ["@babel/preset-env",
      {
        // polyfills: ["es6.promise", "es6.symbol"]
        useBuiltIns: 'entry',
        
      }
    ]
  ]
}
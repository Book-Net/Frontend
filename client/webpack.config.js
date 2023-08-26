const path = require("path");

module.exports = {
  // ... other webpack configuration ...

  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      // Add more fallbacks if needed
    },
  },
};

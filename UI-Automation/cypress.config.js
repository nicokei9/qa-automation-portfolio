const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://d2yqnm7qbjnp0v.cloudfront.net",
        env: {
      username: 'nicolaskeiwin@gmail.com',
      password: 'Endava2024?',
      },
      defaultCommandTimeout: 15000
    },
  });
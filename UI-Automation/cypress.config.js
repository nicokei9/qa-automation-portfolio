require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://d2yqnm7qbjnp0v.cloudfront.net",
        env: {
          username: process.env.CYPRESS_username,
          password: process.env.CYPRESS_password,
      },
      defaultCommandTimeout: 15000
    },
  });
const themeOptions = require("gatsby-theme-preventure-docs/theme-options");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-preventure-docs",
      options: {
        ...themeOptions,
        root: __dirname,
        // defaultVersion: "1",
        // versions: {
        //   "1": "version-1",
        // },
        subtitle: "Core Product",
        sidebarCategories: {
          null: ["index"],
          Labs: ["test", "expansion"],
        },
      },
    },
  ],
};

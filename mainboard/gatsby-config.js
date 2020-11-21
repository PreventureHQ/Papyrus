const themeOptions = require("gatsby-theme-preventure-docs/theme-options");

module.exports = {
  pathPrefix: `/mainboard`,
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
        subtitle: "Mainboard",
        sidebarCategories: {
          null: ["index", "utility_controller"],
        },
      },
    },
  ],
};

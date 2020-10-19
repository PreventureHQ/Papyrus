module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-preventure-docs",
      options: {
        root: __dirname,
        siteName: "Example docs site",
        description: "An example of how to set up documentation sites",
        sidebarCategories: {
          null: ["index"],
        },
      },
    },
  ],
};

const plugins = [
  "gatsby-plugin-styled-components",
  "gatsby-plugin-image",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "src/images/icon.png",
    },
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "./src/images/",
    },
    __key: "images",
  },
];

const { GANALYTICS_TRACKING_ID = "" } = process.env;

if (GANALYTICS_TRACKING_ID) {
  console.log({ GANALYTICS_TRACKING_ID });
  plugins.push({
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: GANALYTICS_TRACKING_ID,
    },
  });
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://axelyung.com",
    title: "Axel Yung",
  },
  plugins,
};

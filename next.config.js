const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.discordapp.com", "i.scdn.co"],
    unoptimized: true,
    loader: 'imgix',
    path: 'https://alfv.com.br/',
  },
};

const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const sitemap = new SitemapStream({ hostname: "https://www.eltitular.com.ar" });

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
];

links.forEach((link) => {
  sitemap.write(link);
});

sitemap.end();

streamToPromise(sitemap)
  .then((data) => {
    createWriteStream(path.join(__dirname, "public", "sitemap.xml")).write(
      data
    );
    console.log("Sitemap generado correctamente.");
  })
  .catch((err) => console.error(err));

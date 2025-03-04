import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

// Define the base URL of your website
const BASE_URL = "https://royalbakeryjaffna.com";

// Generate the sitemap
const generateSitemap = async () => {
  const routes = [
    "/",
    "/cakes",
    "/checkout",
    "/cart",
    "/shop",
    "/aboutus",
    "/blog",
    "/contact",
    "/blog/1", // Example static dynamic route
    "/blog/2",
    "/blog/3",
  ];

  // Create a sitemap instance
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });

  // Path to save the sitemap
  const outputPath = resolve(process.cwd(), "public", "sitemap.xml");
  const writeStream = createWriteStream(outputPath);

  sitemapStream.pipe(writeStream);

  // Add each route to the sitemap
  routes.forEach((route) => {
    sitemapStream.write({ url: route, changefreq: "daily", priority: 0.8 });
  });

  // End the sitemap stream
  sitemapStream.end();

  // Convert the stream to a Promise
  await streamToPromise(sitemapStream);

  console.log(`✅ Sitemap generated at ${outputPath}`);
};

// Run the function
generateSitemap().catch((err) =>
  console.error("❌ Error generating sitemap:", err)
);

import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: "https://mungai.dev",
  });

  sitemap.write({
    url: "/",
    changefreq: "monthly",
    priority: 1,
  });

  sitemap.write({
    url: "/projects/swingmusic",
    changefreq: "monthly",
    priority: 0.9,
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "monthly",
      priority: 0.8,
    });
  }

  sitemap.end();

  return streamToPromise(sitemap);
});

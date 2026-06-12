import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://thales.ma";

function getRoutes(dir: string, base = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;

    if (entry.isDirectory()) {
      routes = routes.concat(getRoutes(path.join(dir, entry.name), `${base}/${entry.name}`));
    } else if (entry.name === "page.tsx") {
      routes.push(base === "" ? "/" : base);
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes = getRoutes(appDir);

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}

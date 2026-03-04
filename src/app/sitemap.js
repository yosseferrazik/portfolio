const BASE_URL = "https://yosseferrazik.com";
const locales = ["es", "en"];
const routes = ["", "/about", "/experience", "/projects", "/contact"];

export default function sitemap() {
  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    })),
  );
}

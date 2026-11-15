const BASE_URL = "https://yosseferrazik.com";
const locales = ["es", "en"];

export default function sitemap() {
  const now = new Date();

  return locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  }));
}

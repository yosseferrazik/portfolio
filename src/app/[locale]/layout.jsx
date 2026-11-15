import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./global.css";

import LanguageSwitcher from "@/components/intl/LanguageSwitcher/LanguageSwitcher";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const SITE_URL = "https://yosseferrazik.com";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isSpanish = locale === "es";

  const title = "Yossef Errazik | Software Developer";
  const description = isSpanish
    ? "Nueva version del portfolio de Yossef Errazik. Proximamente."
    : "A new version of Yossef Errazik's portfolio is coming soon.";

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [
      "Yossef Errazik",
      "software developer",
      "frontend developer",
      "backend developer",
      "Next.js",
      "portfolio",
    ],
    authors: [{ name: "Yossef Errazik" }],
    creator: "Yossef Errazik",
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "Yossef Errazik",
      locale: isSpanish ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <main>
            <div className="optionContainer">
              <LanguageSwitcher />
            </div>
            <section className="content">{children}</section>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

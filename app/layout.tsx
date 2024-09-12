import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Roberto Portfólio",
  description:
    "Portfólio feito por Luis Roberto. Desenvolvimento web, design gráfico e marketing digital.",

  // SEO meta tags
  keywords:
    "Luis Roberto, portfólio, desenvolvimento web, design gráfico, marketing digital, frontend, backend, React, Next.js",
  robots: "index, follow",

  // Open Graph (para compartilhamento em redes sociais)
  openGraph: {
    type: "website",
    title: "Luis Roberto Portfólio",
    description:
      "Portfólio feito por Luis Roberto. Desenvolvimento web, design gráfico e marketing digital.",
    images: [
      {
        url: "https://i.ibb.co/254yp28/Logo-LR.png",
        width: 1200,
        height: 630,
        alt: "Luis Roberto Portfólio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/faviconlr.svg" />
        <meta
          name="google-site-verification"
          content="Wvz4f2fpr7DyWaqO4QyRvw5HhI5VkCmJoNffcLhY9t4"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

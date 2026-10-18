import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./brand-system.css";
import "./polish.css";
import "./shell-polish.css";
import "./site-v3.css";
import "./footer-v3.css";
import "./template-tailwind.css";
import "./division-worlds.css";
import "./home-division-previews.css";
import "./sypher-theme.css";

export const metadata: Metadata = {
  title: {
    default: "Zypher — Tecnologia, Engenharia & Pesquisa",
    template: "%s — Zypher",
  },
  description:
    "Zypher é meu portfólio de software, IA, sistemas embarcados e projetos interativos, com protótipos e estudos em diferentes estágios.",
};

const themeBoot = `
(() => {
  try {
    const saved = localStorage.getItem('sypher-theme');
    const theme = saved === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
  }
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BrandWatermark from "./components/BrandWatermark";

import "./tailwind.css";

export { headers } from './entry.headers';

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
  },
];

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="author" content="Bhavishya Sharma" />
        <meta name="copyright" content="© 2025 Bhavishya Sharma. All rights reserved." />
        <meta name="description" content="InventoryMS™ - Modern Inventory Management System developed by Bhavishya Sharma" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {
                  // Fallback for SSR
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="h-full bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
        <Header />
        <main className="flex-1 relative">
          <Outlet />
          <BrandWatermark />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html>
      <head>
        <title>App Error</title>
      </head>
      <body>
        <h1>Something went wrong</h1>
        <pre>{error.message}</pre>
      </body>
    </html>
  );
}


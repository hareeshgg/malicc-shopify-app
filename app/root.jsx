import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { AppProvider } from "@shopify/polaris";
import "./tailwind.css";
import "@shopify/polaris/build/esm/styles.css";
import Header from "../components/header";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body className="antialiased bg-black text-white">
        <AppProvider i18n={{}}>
          <div id="app-root" className="min-h-screen bg-black">
            <div className="test-css-loaded" style={{ display: 'none' }}>CSS Test</div>
            <Header />
            <Outlet />
          </div>
          <ScrollRestoration />
        </AppProvider>
        <Scripts />
      </body>
    </html>
  );
}

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import tailwindStyles from "./tailwind.css?url";

export const links = () => [{ rel: "stylesheet", href: tailwindStyles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-black text-white" id="app-root">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

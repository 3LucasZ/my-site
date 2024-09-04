// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";
import { Notifications } from "@mantine/notifications";

export const metadata = {
  title: "My Site",
  description: "Lucas Zheng's personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Notifications />
          <Layout>{children}</Layout>
        </MantineProvider>
      </body>
      <GoogleAnalytics gaId="G-LK12V1VZ4Z" />
    </html>
  );
}

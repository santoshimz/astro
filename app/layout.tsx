import "@/styles/globals.css";
import "@/styles/prosemirror.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "./providers";

const title =
  "Personality test";
const description =
  "Personality test";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@steventey",
  },
  metadataBase: new URL("https://novel.sh"),
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

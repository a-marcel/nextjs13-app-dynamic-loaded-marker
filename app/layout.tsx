// import "./global.css";
import { Open_Sans } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("", openSans.className)}>
        {children}
      </body>
    </html>
  );
}
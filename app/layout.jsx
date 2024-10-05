import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const pangeaAfrikanTrial = localFont({
  src: [
    { path: "./fonts/PangeaAfrikanTrial-Light.woff", weight: "300" },
    { path: "./fonts/PangeaAfrikanTrial-Regular.woff", weight: "400" },
    { path: "./fonts/PangeaAfrikanTrial-Medium.woff", weight: "500" },
    { path: "./fonts/PangeaAfrikanTrial-SemiBold.woff", weight: "600" },
    { path: "./fonts/PangeaAfrikanTrial-Bold.woff", weight: "700" },
  ],
  variable: "--font-pangeaAfrikanTrial",
});

export const metadata = {
  title: "Exeonic",
  description: "Generated by Exeonic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pangeaAfrikanTrial.variable} mx-auto max-w-[1440px] antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

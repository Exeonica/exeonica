import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/navbar";

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
  title: "Exeonic - Where Innovation meets Excellence",
  description: "Discover cutting-edge technology solutions with Exeonic. We provide innovative services to tackle modern challenges.",
  openGraph: {
    images: [
      {
        url: "/public/Images/previewImage.png",
        width: 1000,
        height: 300,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pangeaAfrikanTrial.variable} mx-auto max-w-[2100px] font-pangeaAfrikanTrial antialiased`}>
        <Navbar />
        {children}
        <SpeedInsights />
        <ToastContainer />
      </body>
    </html>
  );
}

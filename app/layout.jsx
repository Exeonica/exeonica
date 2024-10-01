import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const pangeaAfrikanTrial = localFont({
  src: "./fonts/Pangea Afrikan Trial.woff",
  variable: "--font-pangea-afrikan-trial",
  weight: "100 900",
});

export const metadata = {
  title: "Exeonic",
  description: "Generated by Exeonic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      //  className={`${pangeaAfrikanTrial.className} antialiased`}
       >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
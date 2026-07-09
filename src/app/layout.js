import { Yeseva_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const yesevaone = Yeseva_One({
  variable: "--font-yeseva",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Silent Whisper",
  description: "Workshirt brand lokal Bandung dengan bahan American Drill premium untuk kuliah, kerja, & hangout",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${yesevaone.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

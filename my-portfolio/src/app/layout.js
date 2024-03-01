import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apurva Mathur | Software engineer",
  description: "Apurva Mathur Porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f8efff] dark:bg-[#09030e]`}>{children}</body>
    </html>
  );
}

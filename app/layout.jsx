import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Mini Dictionary",
  description:
    "The idea of the program is to get word definitions from dictionary, with the sound and the meanings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen`}>
        <Header />
        <main className="container lg:px-12 md:px-12 px-6 max-w-screen-lg my-0 mx-auto pb-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

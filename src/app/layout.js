import { Inter } from "next/font/google";
import "./globals.css";
import Card from "./components/card";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Controle financeiro",
  description: "Sistema de finanças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="bg-gray-200">
      <body className={inter.className}>
        <div className="bg-green-900 flex justify-center items-center p-7 relative">
          <header>
            <h1 className="text-white text-lg font-medium ">Controle financeiro</h1>
          </header>
        </div>
        <main>
          <div className="pt-20 px-3">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

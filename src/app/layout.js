import { Inter } from "next/font/google";
import "./globals.css";
import { MdAttachMoney } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Controle financeiro",
  description: "Sistema de finanças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="bg-gray-200">
      <body className={inter.className}>
        <div className="bg-violet-900 flex px-24 py-5 h-28 relative">
          <div>
            <div className="flex gap-2 items-center">
              <MdAttachMoney className="text-white bg-green-400 rounded-full" />
              <h1 className="text-white text-lg font-medium">Finwallet</h1>
            </div>
          </div>
        </div>
        <main>
          <div className="pt-20 pb-5 px-3 lg:px-20 xl:px-40">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

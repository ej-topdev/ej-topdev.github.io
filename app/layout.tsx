import { Nunito } from "next/font/google";
import dynamic from 'next/dynamic';
import "../app/globals.css";

const nunito = Nunito({ subsets: ["latin"] });
const DynamicHeader = dynamic(() => import('@/components/header'), { ssr: false });
const DynamicThemeSwitch = dynamic(() => import('@/components/theme-switch'), { ssr: false });
const DynamicActiveSectionContextProvider = dynamic(() => import('@/context/active-section-context'), { ssr: false });
const DynamicThemeContextProvider = dynamic(() => import('@/context/theme-context'), { ssr: false });
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Elias Jensen | Full Stack Developer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <DynamicThemeContextProvider>
          <DynamicActiveSectionContextProvider>
            <DynamicHeader />
            {children}
            <Toaster position="top-right" />
            <DynamicThemeSwitch />
          </DynamicActiveSectionContextProvider>
        </DynamicThemeContextProvider>
      </body>
    </html>
  );
}

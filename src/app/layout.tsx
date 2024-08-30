"use client";
import { AuthProvider, StoreProvider, ContextProvider } from "@providers";
import { usePathname } from "next/navigation";
// import { Session } from "next-auth";
import { Inter } from "next/font/google";
import "@/style/global.scss";
import styles from "./layout.module.scss";
import App from "@/App";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const hede = search.get('search');
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.bg}></div>
        <main className={styles.main}>
          <StoreProvider>
            <AuthProvider>
              <ContextProvider currentPath={pathName}>
                <App>{children}</App>
              </ContextProvider>
            </AuthProvider>
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout, { Header, Footer, Content } from "antd/es/layout/layout";
import TopBar from "@/components/TopBar";
import MobileNav from "@/components/MobileNav";
import "@ant-design/v5-patch-for-react-19";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mediterranea Home",
  description: "Mediterranea Home App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-foreground `}
      >
        <AntdRegistry>
          <Layout
            style={{ minHeight: "100vh", maxWidth: "393px", margin: "0 auto" }}
          >
            <Header style={{ backgroundColor: "var(--warning)", padding: "16px" }}>
              <TopBar />
            </Header>

            <Content style={{ padding: "16px", overflow: "hidden" }}>
              {children}
            </Content>

            <Footer
              style={{
                backgroundColor: "var(--warning)",
                position: "sticky",
                bottom: 0,
                zIndex: 1,
                width: "100%",
                padding: "16px",
                boxShadow: "var(--shadow-for-nav)",
              }}
            >
              <MobileNav />
            </Footer>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}

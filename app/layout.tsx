import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic App",
  description: "Deployed on Vercel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Agentic App</h1>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">Powered by Next.js on Vercel</footer>
        </div>
      </body>
    </html>
  );
}

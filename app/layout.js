import "./globals.css";

// Metadata for the page, including title, description, and favicon
export const metadata = {
  title: "Portfolio - Harsh Parmar",
  description: "Welcome to the portfolio of Harsh Parmar, featuring my work, skills, and experiences!",
  icons: {
    icon: "/favicon.ico",
  },
};

// Root layout component that wraps all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

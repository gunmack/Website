import "./globals.css";

export const metadata = {
  title: "Julkar Naine Reedoy",
  images: "favicon.io",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

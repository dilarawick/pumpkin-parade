import "./globals.css";

export const metadata = {
  title: "Pumpkin Parade | Immersive Halloween Experience",
  description:
    "Enter the Pumpkin Parade — a haunted immersive Halloween world with spooky stories, trick-or-treat games, costume ideas, and eerie delights.",
  metadataBase: new URL("https://pumpkin-parade.vercel.app"),
  openGraph: {
    title: "Pumpkin Parade",
    description: "An immersive Halloween experience — spooky, sparkly, and full of treats.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

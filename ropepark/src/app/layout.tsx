import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const robboto = Rubik({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Производство верёвочных парков под ключ",
  description:
    "Производство верёвочных парков, качественно, быстро под ключ по России. Изготовление установка, сопровождение расширение.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      
      <body className={robboto.className}>{children}</body>
    </html>
  );
}

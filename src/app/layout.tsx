import type { Metadata } from "next";

import { Lato, Poppins, Yeseva_One } from "next/font/google";
import { defaultMetadata } from "@/src/app/metadata";
import "./globals.css";

// insert the fonts
const lato = Lato({
  variable: '--font-lato',
  weight: ["100", "400", "700"],
  display: "swap",
  subsets: ["latin"],
})
const poppins = Poppins({
  variable: '--font-poppins',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
})
const yeseva = Yeseva_One({
  variable: '--font-yeseva',
  display: "swap",
  subsets: ["latin"],
  weight: "400"
})

// define the metadata



export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Rejoignez-nous - Lyre Intercommunale du Limouxin',
  description:
    'Envie de rejoindre un orchestre dynamique ? La Lyre Intercommunale du Limouxin recrute des musiciens passionnés. Contactez-nous pour en savoir plus.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Rejoignez-nous - Lyre Intercommunale du Limouxin',
    description:
      'Envie de rejoindre un orchestre dynamique ? La Lyre Intercommunale du Limouxin recrute des musiciens passionnés.',
    url: 'https://www.lyre-limouxin.fr/rejoignez-nous',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lato.variable} ${yeseva.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

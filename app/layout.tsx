import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/app/components/theme/providers";
import NextTopLoader from "nextjs-toploader";
import ToasterProvider from "@/providers/ToasterProvider";
import getCurrentUser from "@/actions/getCurrentUser";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Travel Trail Holidays",
    template: "%s",
  },
  description: "Crafting unforgettable travel experiences. We take care of the details, so you can focus on making memories.",
  icons: {
    icon: '/icon.png',
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentuser = await getCurrentUser();

  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <body className="">
        <NextTopLoader color="#FF5956" height={3} showSpinner={false}/>
        <ToasterProvider />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

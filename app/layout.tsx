import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@/styles/globals.css';
import Header from '@/components/navbar/Header';
// import FooterBar from '@/components/footer/FooterBar';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from "@/components/ui/theme/ThemeProvider";
import AccountModal from "@/components/modal/AccountModal";
import RegisterModal from "@/components/modal/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";
import LoginModal from "@/components/modal/LoginModal";
import getCurrentUser from "@/app/actions/getCurrentUser";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Travel Trail Holidays",
  description: "Travel Trail Holidays",
  icons: {
    icon: '/icon.png',
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
          <ToasterProvider/>
          <AccountModal/>
          <RegisterModal/>
          <LoginModal/>
          <Header currentUser={currentUser}/>
          {children}
          {/* <FooterBar/> */}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
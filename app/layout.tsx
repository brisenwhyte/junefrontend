import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JUNE - Moneys new Season',
  description: 'JUNE is your best BTC Savings app',
  icons: {
    icon: '/logo.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

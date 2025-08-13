import './globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export const metadata = { title: 'Cargo Shift', description: 'Modern logistics & freight optimization platform' };
export default function RootLayout({ children }: { children: ReactNode }) { return ( <html lang="en" className="h-full bg-white"> <body className={inter.className + ' min-h-full flex flex-col'}>{children}</body> </html> ); }
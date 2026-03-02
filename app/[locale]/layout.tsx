import { Inter } from "next/font/google";
import "../main.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { CookieBanner } from "@/components/CookieBanner";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    title: "Meteora | Cloud Architecture & Consulting",
    description: "Infrastrutture Cloud Scalabili, Sicure e Ottimizzate",
    alternates: {
        languages: {
            'it': 'https://meteora-cloud.com/it',
            'en': 'https://meteora-cloud.com/en',
            'de': 'https://meteora-cloud.com/de',
        }
    }
};

export function generateStaticParams() {
    return [{ locale: "it" }, { locale: "en" }, { locale: "de" }];
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages({ locale });

    return (
        <html lang={locale} className={`${inter.variable} bg-background`}>
            <body className="bg-background text-textMain antialiased">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Header />
                    {children}
                    <CookieBanner />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import { Metrika } from '@/components/Metrika';
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    title: 'Медицинская Сервисная Компания. Госпитализация без полиса ОМС. 8 (499) 719-81-00, 24/7',
    description: 'Официальный координатор госпитализации в Москве. 10 лет опыта, 20 клиник-партнёров. Быстро, с минимальным пакетом документов и прозрачными расчётами.',
    keywords: ['платная госпитализация без ОМС', 'экстренная платная госпитализация в москве', 'экстренная госпитализация в стационар платно'],
    other: {
        ['yandex-verification']: 'bfbbb3def7ef9b1a',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Госпитализация без полиса ОМС. 8 (499) 719-81-00, 24/7',
        description: 'Официальный координатор госпитализации в Москве. 10 лет опыта, 20 клиник-партнёров. Быстро, с минимальным пакетом документов и прозрачными расчётами.',
        images: ['/images/banner2.webp'],
        url: 'https://oms.mskdoctor.ru/',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika />
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}

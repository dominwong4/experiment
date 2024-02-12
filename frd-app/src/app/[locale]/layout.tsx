import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/theme-provider';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { QueryProvider } from '@/components/providers/query-provider';
import { getRequestConfig, getTranslations } from 'next-intl/server';
import LangageSwitcher from '@/components/language-switcher';
import { ModeToggle } from '@/components/mode-toggle';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('title'),
  };
}

export default function RootLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <NextIntlClientProvider messages={messages}>
              <div className="flex justify-end space-x-4">
                <ModeToggle />
                <LangageSwitcher />
              </div>
              {children}
            </NextIntlClientProvider>
          </QueryProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

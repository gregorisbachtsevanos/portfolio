'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import { GlobalStyles } from './global.styled';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { roboto } from './font';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: '../assets/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <StyledComponentsRegistry>
              <GlobalStyles />
              <main className={inter.className}>{children}</main>
            </StyledComponentsRegistry>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

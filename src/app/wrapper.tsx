'use client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from '@/store/store';

import StyledComponentsRegistry from './lib/registry';
import { GlobalStyles } from './global.styled';
import { defaultTheme } from './theme';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <StyledComponentsRegistry>
              <GlobalStyles />
              {children}
            </StyledComponentsRegistry>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

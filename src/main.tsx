import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';

import { ThemeProvider } from '@mui/material';

import { UserProvider } from './context/userContext';
import RouteComponents from './routes/';
import { theme } from './theme';

import 'src/styles/global.css';
import 'src/styles/font.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
      retryDelay: (failureCount) => failureCount * 1000,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Router>
          <RouteComponents />
        </Router>
      </UserProvider>
      <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }} />
    </ThemeProvider>
  </QueryClientProvider>,
);

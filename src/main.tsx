import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
      <Router>
        <RouteComponents />
      </Router>
    </ThemeProvider>
  </QueryClientProvider>,
);

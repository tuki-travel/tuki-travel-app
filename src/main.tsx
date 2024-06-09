import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter, NotFoundRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './routes/__root.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import './index.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { initContainer } from './utils/IOCInit.ts';

// Create a new router instance
const notFoundRoute = new NotFoundRoute({
    getParentRoute: () => rootRoute,
    component: () => '404 Not Found',
});

// Create a new router instance
const router = createRouter({ routeTree, notFoundRoute });
// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
initContainer();
// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </StrictMode>
    );
}

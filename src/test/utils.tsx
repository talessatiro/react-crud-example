import { render } from '@testing-library/react';
import { rest } from 'msw';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { HttpClientContextProvider } from '../shared/contexts/HttpClientContext';

export const handlers = [
    rest.post('*/users', (req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json({
                id: 1,
                name: 'Chuck Norris',
                age: 45,
                email: 'chucknorris@legend.com',
            }),
        );
    }),
];

const createTestQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });
};

export const renderWithContext = (component: ReactElement<any, any>) => {
    return render(
        <HttpClientContextProvider>
            <QueryClientProvider client={createTestQueryClient()}>
                <MemoryRouter>{component}</MemoryRouter>
            </QueryClientProvider>
        </HttpClientContextProvider>,
    );
};

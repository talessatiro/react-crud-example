import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { HttpClientContextProvider } from './shared/contexts/HttpClientContext';
import { Layout } from './shared/layout';

const queryClient = new QueryClient();

function App() {
    return (
        <HttpClientContextProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </QueryClientProvider>
        </HttpClientContextProvider>
    );
}

export default App;

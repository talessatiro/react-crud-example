import axios, { AxiosInstance } from 'axios';
import React, { ReactNode, useMemo } from 'react';

type HttpClientContextProviderProps = {
    children: React.PropsWithChildren<ReactNode>;
};

export const HttpClientContext = React.createContext<AxiosInstance>(
    {} as AxiosInstance,
);

export const HttpClientContextProvider = ({
    children,
}: HttpClientContextProviderProps) => {
    const httpClient = useMemo<AxiosInstance>(() => {
        const axiosClient = axios.create({
            baseURL: 'http://localhost:3333',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return axiosClient;
    }, []);

    return (
        <HttpClientContext.Provider value={httpClient}>
            {children}
        </HttpClientContext.Provider>
    );
};

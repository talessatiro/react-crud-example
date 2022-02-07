import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useHttpClient } from '../../shared/hooks';
import { StatusCodes } from 'http-status-codes';

export type User = {
    id?: number;
    name: string;
    age: number;
    email: string;
};

export const useUsers = () => {
    const _httpClient = useHttpClient();
    const _queryClient = useQueryClient();

    const all = () => {
        return useQuery<User[]>('users', async () => {
            const { data, status } = await _httpClient.get('users');

            if (status !== StatusCodes.OK) {
                throw new Error(data.error);
            }

            return data;
        });
    };

    const find = (id: number) => {
        return useQuery<User>(['users', id], async () => {
            const { data, status } = await _httpClient.get(`users/${id}`);

            if (status !== StatusCodes.OK) {
                throw new Error(data.error);
            }

            return data;
        });
    };

    const create = () => {
        return useMutation(async (newUser: User) => {
            const { data, status } = await _httpClient.post('users', newUser);

            if (status !== StatusCodes.CREATED) {
                throw new Error(data.error);
            }

            return data;
        });
    };

    const update = () => {
        return useMutation(async (userToUpdate: User) => {
            const { data, status } = await _httpClient.put(
                `users/${userToUpdate.id}`,
                userToUpdate,
            );

            if (status !== StatusCodes.OK) {
                throw new Error(data.error);
            }

            return data;
        });
    };

    const remove = () => {
        return useMutation(
            async (id: number) => {
                const { data, status } = await _httpClient.delete(
                    `users/${id}`,
                );

                if (status !== StatusCodes.OK) {
                    throw new Error(data.error);
                }

                return data;
            },
            {
                onSuccess: () => {
                    _queryClient.invalidateQueries('users');
                },
            },
        );
    };

    return {
        users: {
            all,
            create,
            update,
            remove,
            find,
        },
    };
};

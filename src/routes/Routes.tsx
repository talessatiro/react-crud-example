import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, UserManagement } from '../pages';
import {
    UserList,
    UserCreate,
    UserEdit,
} from '../pages/users-management/components';

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<UserManagement />}>
                <Route path="" element={<UserList />} />
                <Route path="create" element={<UserCreate />} />
                <Route path="edit/:id" element={<UserEdit />} />
            </Route>
            <Route path="*" element={<Navigate to="home" replace={true} />} />
        </Routes>
    );
};

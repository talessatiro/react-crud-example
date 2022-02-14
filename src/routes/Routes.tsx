import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const LazyHome = React.lazy(() =>
    import('../pages/home/Home').then((module) => ({ default: module.Home })),
);

const LazyUserManagement = React.lazy(() =>
    import('../pages/users-management/UserManagement').then((module) => ({
        default: module.UserManagement,
    })),
);

const LazyUserList = React.lazy(() =>
    import('../pages/users-management/components/user-list/UserList').then(
        (module) => ({ default: module.UserList }),
    ),
);

const LazyUserCreate = React.lazy(() =>
    import('../pages/users-management/components/user-create/UserCreate').then(
        (module) => ({ default: module.UserCreate }),
    ),
);

const LazyUserEdit = React.lazy(() =>
    import('../pages/users-management/components/user-edit/UserEdit').then(
        (module) => ({ default: module.UserEdit }),
    ),
);

export const RoutesApp = () => {
    return (
        <React.Suspense fallback="Loading...">
            <Routes>
                <Route path="/home" element={<LazyHome />} />
                <Route path="/users" element={<LazyUserManagement />}>
                    <Route path="" element={<LazyUserList />} />
                    <Route path="create" element={<LazyUserCreate />} />
                    <Route path="edit/:id" element={<LazyUserEdit />} />
                </Route>
                <Route
                    path="*"
                    element={<Navigate to="home" replace={true} />}
                />
            </Routes>
        </React.Suspense>
    );
};

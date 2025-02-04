import { Outlet, Navigate } from 'react-router';

import { useAppSelector } from '../hooks/redux';

const ProtectedRoutes = () => {
    const { isAuth } = useAppSelector(state => state.authReducer);
    return isAuth ? <Outlet /> : <Navigate to="/sign-in" replace={true} />;
};

export default ProtectedRoutes;
import { Outlet, Navigate } from 'react-router';

import { useAppSelector } from '../hooks/redux';

const SignedOutRoutes = () => {
    const { isAuth } = useAppSelector(state => state.authReducer);
    return !isAuth ? <Outlet /> : <Navigate to="/home" replace={true} />;
};

export default SignedOutRoutes;
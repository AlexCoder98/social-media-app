import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const StartPage = lazy(() => import('../pages/Start'));
const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const ResetPasswordPage = lazy(() => import('../pages/ResetPassword'));
const NotFoundPage = lazy(() => import('../pages/404'));

const SignedOutLayout = () => {
    return (
        <Routes>
            <Route path='/'>
                <Route index element={<StartPage />} />
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='/reset-password' element={<ResetPasswordPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default SignedOutLayout;
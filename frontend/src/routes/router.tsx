import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const StartPage = lazy(() => import('../pages/Start'));
const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const ResetPasswordPage = lazy(() => import('../pages/ResetPassword'));
const HomePage = lazy(() => import('../pages/Home'));
const PostsPage = lazy(() => import('../pages/Posts'));
const UserPage = lazy(() => import('../pages/User'));
const NotFoundPage = lazy(() => import('../pages/404'));

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/reset-password' element={<ResetPasswordPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/user/:userId' element={<UserPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default Router;
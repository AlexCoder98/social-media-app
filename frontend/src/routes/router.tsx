import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const SignedOutRoutes = lazy(() => import('../utils/SignedOutRoutes'));
const StartPage = lazy(() => import('../pages/Start'));
const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const ResetPasswordPage = lazy(() => import('../pages/ResetPassword'));

const ProtectedRoutes = lazy(() => import('../utils/ProtectedRoutes'));
const HomePage = lazy(() => import('../pages/Home'));
const PostsPage = lazy(() => import('../pages/Posts'));
const FriendsPage = lazy(() => import('../pages/Friends'));
const UserPage = lazy(() => import('../pages/User'));

const NotFoundPage = lazy(() => import('../pages/404'));


const Router = () => {
    return (
        <Routes>
            <Route element={<SignedOutRoutes />}>
                <Route path='/' element={<StartPage />} />
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='/reset-password' element={<ResetPasswordPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path='/home' element={<HomePage />} />
                <Route path='/posts' element={<PostsPage />} />
                <Route path='/friends' element={<FriendsPage />} />
                <Route path='/user/:userId' element={<UserPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes >
    )
}

export default Router;
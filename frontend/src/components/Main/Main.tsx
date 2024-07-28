import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from '../Loading/Loading';

import '../../styles/Main.css';
import { useAppSelector } from '../../hooks/redux';

const HomePage = lazy(() => import('../../pages/Home'));
const SignInPage = lazy(() => import('../../pages/SignIn'));
const SignUpPage = lazy(() => import('../../pages/SignUp'));
const ResetPasswordPage = lazy(() => import('../../pages/ResetPassword'));
const MainPage = lazy(() => import('../../pages/Main'));
const PostsPage = lazy(() => import('../../pages/Posts'));
const PostPage = lazy(() => import('../../pages/Post'));
const EditPostPage = lazy(() => import('../../pages/EditPost'));
const CreatePostPage = lazy(() => import('../../pages/CreatePost'));
const ProfilePage = lazy(() => import('../../pages/Profile'));
const EditProfilePage = lazy(() => import('../../pages/EditProfile'));
const NotFoundPage = lazy(() => import('../../pages/404'));

const Main = () => {
    const { isSignedIn } = useAppSelector((state) => state.users);

    return (
        <main className="app__main">
            <section className="app__main-content">
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/'>
                            <Route index element={<HomePage />} />
                            <Route path='/sign-in' element={<SignInPage />} />
                            <Route path='/sign-up' element={<SignUpPage />} />
                            <Route path='/reset-password' element={<ResetPasswordPage />} />
                        </Route>
                        {isSignedIn && (
                            <>
                                <Route path='/main-page' element={<MainPage />} />
                                <Route path='/posts'>
                                    <Route index element={<PostsPage />} />
                                    <Route path=':postId' element={<PostPage />} />
                                    <Route path=':postId/edit' element={<EditPostPage />} />
                                    <Route path='create-new' element={<CreatePostPage />} />
                                </Route>
                                <Route path='/profile'>
                                    <Route index element={<ProfilePage />} />
                                    <Route path='edit-profile' element={<EditProfilePage />} />
                                </Route>
                            </>
                        )}
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </section>
        </main>
    )
}

export default Main;
import { useContext } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

import HomePage from '../../pages/Home';
import SignInPage from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';
import ResetPasswordPage from '../../pages/ResetPassword';
import MainPage from '../../pages/MainPage';
import PostsPage from '../../pages/Posts';
import PostPage from '../../pages/Post';
import NotFoundPage from '../../pages/404';
import ProfilePage from '../../pages/Profile';

import '../../styles/Main.css';

const Main = () => {
    const { state } = useContext(AppContext);

    return (
        <main className="app__main">
            <section className="app__main-content">
                {!state.isUserLoggedIn && (
                    <img
                        className="app__main-background"
                        src="/files/images/network_1_cutted.png"
                        alt="Network main background"
                    />
                )}
                <Routes>
                    <Route path='/' element={<HomePage />} index />
                    <Route path='/sign-in' element={<SignInPage />} />
                    <Route path='/sign-up' element={<SignUpPage />} />
                    <Route path='/reset-password' element={<ResetPasswordPage />} />
                    <Route path='/main' element={<MainPage />} />
                    <Route path='/posts'>
                        <Route index element={<PostsPage />}></Route>
                        <Route path=':postId' element={<PostPage />} />
                    </Route>
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </section>
        </main>
    )
}

export default Main;
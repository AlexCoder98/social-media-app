import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/Home';
import SignInPage from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';
import ResetPasswordPage from '../../pages/ResetPassword';
import MainPage from '../../pages/Main';
import PostsPage from '../../pages/Posts';
import PostPage from '../../pages/Post';
import EditPostPage from '../../pages/EditPost';
import CreatePostPage from '../../pages/CreatePost';
import ProfilePage from '../../pages/Profile';
import EditProfilePage from '../../pages/EditProfile';
import NotFoundPage from '../../pages/404';

import '../../styles/Main.css';

const Main = () => {
    return (
        <main className="app__main">
            <section className="app__main-content">
                <Routes>
                    <Route path='/' element={<HomePage />} index />
                    <Route path='/sign-in' element={<SignInPage />} />
                    <Route path='/sign-up' element={<SignUpPage />} />
                    <Route path='/reset-password' element={<ResetPasswordPage />} />
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
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </section>
        </main>
    )
}

export default Main;
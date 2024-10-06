import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/Home'));
const PostsPage = lazy(() => import('../pages/UserPosts'));
const PostPage = lazy(() => import('../pages/Post'));
const EditPostPage = lazy(() => import('../pages/EditPost'));
const CreatePostPage = lazy(() => import('../pages/CreatePost'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));
const EditPublicInformationPage = lazy(() => import('../pages/ProfileSettings'));
const EditAccessPage = lazy(() => import('../pages/AuthenticationSettings'));
const NotFoundPage = lazy(() => import('../pages/404'));

const SignedInLayout = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/my-posts'>
                <Route index element={<PostsPage />} />
                <Route path=':postId' element={<PostPage />} />
                <Route path=':postId/edit' element={<EditPostPage />} />
                <Route path='create-new' element={<CreatePostPage />} />
            </Route>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} >
                <Route path="profile" element={<EditPublicInformationPage />} />
                <Route path="authentication" element={<EditAccessPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
};

export default SignedInLayout;
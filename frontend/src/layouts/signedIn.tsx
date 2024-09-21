import { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/Main'));
const PostsPage = lazy(() => import('../pages/Posts'));
const PostPage = lazy(() => import('../pages/Post'));
const EditPostPage = lazy(() => import('../pages/EditPost'));
const CreatePostPage = lazy(() => import('../pages/CreatePost'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));
const EditPublicInformationPage = lazy(() => import('../pages/GeneralSettings'));
const EditAccessPage = lazy(() => import('../pages/AccessSettings'));
const NotFoundPage = lazy(() => import('../pages/404'));

const SignedInLayout = () => {
    return (
        <Routes>
            <Route path='/main-page' element={<MainPage />} />
            <Route path='/posts'>
                <Route index element={<PostsPage />} />
                <Route path=':postId' element={<PostPage />} />
                <Route path=':postId/edit' element={<EditPostPage />} />
                <Route path='create-new' element={<CreatePostPage />} />
            </Route>
            {/* <Route path="/profile/:userId">
                <Route index element={<ProfilePage />} />
                <Route path='edit' element={<EditProfilePage />} />
            </Route> */}
            {/* <Route path="/profile"> */}
            {/* <Route index element={<ProfilePage />} /> */}
            {/* <Route path='settings' element={<EditProfilePage />} /> */}
            {/* </Route> */}
            <Route path="/profile" element={<ProfilePage />} />
            {/* <Route path="/settings" element={<SettingsPage />} /> */}
            <Route path="/settings" element={<SettingsPage />} >
                <Route path="general" element={<EditPublicInformationPage />} />
                <Route path="access" element={<EditAccessPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
};

export default SignedInLayout;
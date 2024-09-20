import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/Main'));
const PostsPage = lazy(() => import('../pages/Posts'));
const PostPage = lazy(() => import('../pages/Post'));
const EditPostPage = lazy(() => import('../pages/EditPost'));
const CreatePostPage = lazy(() => import('../pages/CreatePost'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const EditProfilePage = lazy(() => import('../pages/EditProfile'));
const EditPublicInformationPage = lazy(() => import('../pages/EditPublicInformationPage'));
const EditAccessPage = lazy(() => import('../pages/EditAccessPage'));
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
            <Route path="/settings/public-information" element={<EditPublicInformationPage />} />
            {/* <Route path="/settings/access" element={<EditAccessPage />} /> */}
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
};

export default SignedInLayout;
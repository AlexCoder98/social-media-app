import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/Home';
import SignInPage from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';
import NotFoundPage from '../../pages/404Page';

const Main = () => {
    return (
        <header className="app__main">
            <Routes>
                <Route path='/' element={<HomePage />} index />
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </header>
    )
}

export default Main;
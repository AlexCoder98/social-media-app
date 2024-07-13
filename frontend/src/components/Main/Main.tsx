import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/Home';
import SignInPage from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';
import NotFoundPage from '../../pages/404';

import '../../styles/Main.css';

const Main = () => {
    return (
        <main className="app__main">
            <section className="app__main-content">
                <img
                    className="app__main-background"
                    src="/files/images/network_1_cutted.png"
                    alt="Network main background"
                />
                <Routes>
                    <Route path='/' element={<HomePage />} index />
                    <Route path='/sign-in' element={<SignInPage />} />
                    <Route path='/sign-up' element={<SignUpPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </section>
        </main>
    )
}

export default Main;
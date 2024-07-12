import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/Home';
import SignInPage from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';
import NotFoundPage from '../../pages/404';

import '../../styles/Main.css';

const Main = () => {

    // FIND OUT HOW TO CHANGE CLASS DEPENDING ON URL ADDRESS!!!!!
    // FOR IMAGE BACKGROUND!!!
    return (
        <main className="app__main">
            <img
                className="app__main-background"
                src="/files/images/network_1_cutted.png"
                alt="Network main background"
            />
            <section className="app__main-content">
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
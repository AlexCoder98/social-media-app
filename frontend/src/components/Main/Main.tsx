import { Suspense } from 'react';

import Loading from '../Loading/Loading';

import { useAppSelector } from '../../hooks/redux';

import SignedOutLayout from '../../layouts/signedOut';
import SignedInLayout from '../../layouts/signedIn';

import '../../styles/Main.css';

const Main = () => {
    const { isAuth } = useAppSelector((state) => state.authentication);
    return (
        <main className="app__main">
            <section className="app__main-content">
                <Suspense fallback={<Loading />}>
                    {
                        isAuth === 'false' ? <SignedOutLayout /> : <SignedInLayout />
                    }
                </Suspense>
            </section>
        </main>
    )
}

export default Main;
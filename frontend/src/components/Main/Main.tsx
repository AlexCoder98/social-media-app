import { Suspense } from 'react';

import Loading from '../Loading/Loading';

import { useAppSelector } from '../../hooks/redux';

import SignedOutLayout from '../../layouts/signedOut';
import SignedInLayout from '../../layouts/signedIn';

import '../../styles/pages_styles/Main.css';

const Main = () => {
    const { isAuth } = useAppSelector((state) => state.authentication);
    return (
        <main className="app__main">
            <div className="app__main-content">
                <Suspense fallback={<Loading />}>
                    {
                        isAuth === 'false' ? <SignedOutLayout /> : <SignedInLayout />
                    }
                </Suspense>
            </div>
        </main>
    )
}

export default Main;
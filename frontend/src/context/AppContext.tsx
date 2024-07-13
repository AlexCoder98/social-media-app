import { createContext } from 'react';
import { initialAppState } from '../reducer/reducer';
import { ACTIONTYPE } from '../reducer/reducer';

type AppContextType = {
    state: typeof initialAppState,
    dispatchFn: React.Dispatch<ACTIONTYPE>
}

export const AppContext = createContext({} as AppContextType);
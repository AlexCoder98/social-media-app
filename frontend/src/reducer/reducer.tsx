export type ACTIONTYPE =
  | { type: 'CHANGE_LOGIN_STATUS', payload: boolean }

export const initialAppState = {
  isUserLoggedIn: false
}

export const reducer = (state: typeof initialAppState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'CHANGE_LOGIN_STATUS':
      return { isUserLoggedIn: action.payload };
    default:
      throw new Error('Something went wrong with the state menagement');
  }
}
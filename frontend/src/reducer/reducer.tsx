export type ACTIONTYPE =
  | { type: 'changed_login_status', isLogged: boolean }

export const initialAppState = {
  isUserLoggedIn: false,
}

export const reducer = (state: typeof initialAppState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'changed_login_status': {
      return { isUserLoggedIn: action.isLogged };
    }
    default:
      throw new Error(`Unknowing action: ${action.type}`);
  }
}
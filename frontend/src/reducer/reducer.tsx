import { PostType } from "../types/post";

export type ACTIONTYPE =
  | { type: 'changed_login_status', isLogged: boolean }
  | { type: 'added_post', id: string }

export const initialAppState = {
  isUserLoggedIn: false,
  posts: [],
}

export const reducer = (state: typeof initialAppState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'changed_login_status': {
      return {
        ...state,
        isUserLoggedIn: action.isLogged
      };
    }
    // case 'added_post': {
    //   return {
    //     ...state,
    //     posts: state.posts.push(action.id)
    //   };
    // }
    default:
      throw new Error(`Unknowing action: ${action.type}`);
  }
}
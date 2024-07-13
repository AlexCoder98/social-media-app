type NavigationLinksType = {
    content: string;
    url: string;
    title: string;
}[]

export const navigationLoggedOutLinksData: NavigationLinksType = [
    {
        content: 'Sign in',
        url: '/sign-in',
        title: 'Sign In'
    },
    {
        content: 'Sign up',
        url: '/sign-up',
        title: 'Sign up'
    },
];

export const navigationLoggedInLinksData: NavigationLinksType = [
    {
        content: 'Home',
        url: '/home',
        title: 'Home'
    },
    {
        content: 'Posts',
        url: '/posts',
        title: 'Posts'
    },
    {
        content: 'Profile',
        url: '/profile',
        title: 'Profile'
    },
    {
        content: 'Sign out',
        url: '/',
        title: 'Sign out'
    },
]
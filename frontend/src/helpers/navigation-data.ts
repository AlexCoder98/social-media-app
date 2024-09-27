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
        content: 'Main page',
        url: '/main-page',
        title: 'Main'
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
]

export const editProfileNavigationData: NavigationLinksType = [
    {
        content: 'Profile',
        url: '/settings/profile',
        title: 'Profile settings'
    },
    {
        content: 'Authentication',
        url: '/settings/authentication',
        title: 'Authentication settings'
    },
]
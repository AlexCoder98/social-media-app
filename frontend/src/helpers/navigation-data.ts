type NavigationLinksType = {
    content: string;
    url: string;
    title: string;
    iconName?: string | null;
}[]

export const navigationLoggedOutLinksData: NavigationLinksType = [
    {
        content: 'Sign in',
        url: '/sign-in',
        title: 'Sign In',
        iconName: 'arrow-right-to-bracket'
    },
    {
        content: 'Sign up',
        url: '/sign-up',
        title: 'Sign up',
        iconName: 'user-plus'
    },
];

export const navigationLoggedInLinksData: NavigationLinksType = [
    {
        content: 'Home',
        url: '/home',
        title: 'Home page',
        iconName: 'house'
    },
    {
        content: 'My Posts',
        url: '/my-posts',
        title: 'My posts',
        iconName: 'photo-film'
    },
    {
        content: 'Profile',
        url: '/profile',
        title: 'Profile',
        iconName: 'user'
    },
]

export const profileSettingsNavigationData: NavigationLinksType = [
    {
        content: 'Profile',
        url: '/settings/profile',
        title: 'Profile settings',
        iconName: 'user'
    },
    {
        content: 'Location',
        url: '/settings/location',
        title: 'Location settings',
        iconName: 'location-dot'
    },
    {
        content: 'Authentication',
        url: '/settings/authentication',
        title: 'Authentication settings',
        iconName: 'lock'
    },
]
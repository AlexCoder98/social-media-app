export const changeBgPosition = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const anchorTitle = (e.target as HTMLAnchorElement | HTMLSpanElement).title;
    const bgElement = document.querySelector('.app__main-background') as HTMLImageElement;
    if (anchorTitle === 'Go to home page' || anchorTitle === 'Reset password') {
        bgElement.classList.remove('aside');
    } else {
        bgElement.classList.add('aside');
    }
}
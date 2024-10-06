import { IconName } from "@fortawesome/fontawesome-svg-core";

export type NavigationLinkProps = {
    to: string;
    content: string;
    iconName?: IconName | null;
    title?: string;
}
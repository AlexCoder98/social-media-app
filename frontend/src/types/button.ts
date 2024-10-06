import { IconName } from "@fortawesome/fontawesome-svg-core";

export type ButtonProps = {
    className: string;
    content: string;
    title: string;
    type?: "button" | "reset" | "submit";
    method?: () => void
    isDisabled?: boolean;
    iconName?: IconName;
}
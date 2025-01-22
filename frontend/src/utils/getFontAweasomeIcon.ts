import {
    library,
    IconLookup,
    IconDefinition,
    findIconDefinition,
    IconName
} from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

export const getFontAwesomeIcon = (icon: IconName | null) => {
    const iconLookUp: IconLookup = { prefix: 'fas', iconName: icon as IconName };
    const iconDefinition: IconDefinition = findIconDefinition(iconLookUp);

    return iconDefinition;
}
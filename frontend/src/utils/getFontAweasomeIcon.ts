import {
    library,
    IconLookup,
    IconDefinition,
    findIconDefinition,
    IconName,
    IconPrefix
} from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab, far);

export const getFontAwesomeIcon = (prefix: IconPrefix, icon: IconName | null) => {
    const iconLookUp: IconLookup = { prefix: prefix, iconName: icon! };
    const iconDefinition: IconDefinition = findIconDefinition(iconLookUp);

    return iconDefinition;
}
import { useState, useEffect } from 'react';

import { IconName } from '@fortawesome/fontawesome-svg-core';
import {
    library,
    IconLookup,
    IconDefinition,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

export const useFontAwesomeIcon = (iconName: IconName | null) => {
    const [icon, setIcon] = useState<IconName | null>(null);

    useEffect(() => {
        setIcon(iconName);
    }, [iconName]);

    const iconLookUp: IconLookup = { prefix: 'fas', iconName: icon as IconName }
    const iconDefinition: IconDefinition = findIconDefinition(iconLookUp);

    return iconDefinition;
}
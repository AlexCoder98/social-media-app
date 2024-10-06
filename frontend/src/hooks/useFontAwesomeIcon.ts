import { useState, useEffect } from 'react';

import {
    library,
    IconLookup,
    IconDefinition,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { IconType } from '../types/nav-link';

library.add(fas);

export const useFontAwesomeIcon = (iconName: IconType | null) => {
    const [icon, setIcon] = useState<IconType | null>(null);

    useEffect(() => {
        setIcon(iconName);
    }, []);

    const iconLookUp: IconLookup = { prefix: 'fas', iconName: icon as IconType }
    const iconDefinition: IconDefinition = findIconDefinition(iconLookUp);

    return iconDefinition;
}
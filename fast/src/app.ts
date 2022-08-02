/**
 *  Imports fuer die Verwendung der Webkomponenten von FAST
 */

import {
    allComponents,
    provideFluentDesignSystem
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(allComponents);
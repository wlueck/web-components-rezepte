/**
 *  Imports fuer die Verwendung der Webkomponenten von FAST
 */

import {
    allComponents,
    provideFASTDesignSystem
} from "@microsoft/fast-components";

provideFASTDesignSystem()
    .register(allComponents);
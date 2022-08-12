/**
 *  Imports fuer die Verwendung der Webkomponenten von FAST
 */

import {
    fastButton,
    fastAnchor,
    fastTextField,
    fastNumberField,
    fastRadio,
    fastCheckbox,
    fastSelect,
    fastOption,
    fastTextArea,
    fastAccordion,
    fastAccordionItem,
    fastDataGridCell,
    fastDataGridRow,
    fastDataGrid,
    fastDesignSystemProvider,
    provideFASTDesignSystem
} from "@microsoft/fast-components";

provideFASTDesignSystem()
    .register(
        fastButton(),
        fastAnchor(),
        fastTextField(),
        fastNumberField(),
        fastRadio(),
        fastCheckbox(),
        fastSelect(),
        fastOption(),
        fastTextArea(),
        fastAccordion(),
        fastAccordionItem(),
        fastDataGridCell(),
        fastDataGridRow(),
        fastDataGrid(),
        fastDesignSystemProvider()
    );
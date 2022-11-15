import {ReactElement} from "react";

export interface NavigationNavbarItemInterface {
    id: number,
    path: string,
    displayName: string,
    element: ReactElement,
    uiID?: string,
    uiClass?: string
}
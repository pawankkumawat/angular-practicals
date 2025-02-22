import { InjectionToken } from "@angular/core";
export interface IFooter{
    save:()=>void;
    discard:()=>void;
    refresh:()=>void;
}

export const FOOTER_TOKEN = new InjectionToken<IFooter>('footer');
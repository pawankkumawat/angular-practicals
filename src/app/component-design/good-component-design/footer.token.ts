import { InjectionToken } from "@angular/core";

export const FOOTER_TOKEN = new InjectionToken<Footer>('Footer Token');

export interface Footer{
  refresh:()=>void;
  save:()=>void;
  discard:()=>void;
}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RAPID_API_HOST, RAPID_API_KEY } from "../constants/constant";

@Injectable({
    providedIn:'root'
})
export class AuthInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req && req.url.toLocaleLowerCase().startsWith('https://imdb8.p.rapidapi.com')){

         let interceptedRequest = req.clone({
           headers:req.headers.append('x-rapidapi-host',RAPID_API_HOST).append('x-rapidapi-key', RAPID_API_KEY),
         })
         return next.handle(interceptedRequest);
        }
        return next.handle(req);
    }

}
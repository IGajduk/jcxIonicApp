import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    private host = 'https://jsonplaceholder.typicode.com/photos';
    constructor(
        private http: HttpClient
    ) { }
    getPhotos(query: {}): Observable<any> {
        console.log(query);
        const url = this.getUrl(this.host, query);
        console.log(url);
        return this.http.get<any>(`${url}`);
    }

    getUrl(url = '?', query = {}) {
        url += '?';
        for (const key in query) {
            if (query[key]) {
                url += `${key}=${JSON.stringify(query[key])}&`;
            }
        }

        return url;
    }
}

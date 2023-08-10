import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class service {

    api: string = "http://13.126.112.43:86/";

    constructor(private http: HttpClient) { }

    getPersonalDetailsById(id: any) {
        return this.http.get(this.api + 'api/personalDetails/users/' + id)
    }
}
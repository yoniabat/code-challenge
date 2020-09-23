import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

/**
 * Enrollees related tasks.
 */
@Injectable({
  providedIn: 'root'
})
export class EnroleeService {

  constructor(private http: HttpClient) { }

  /**
   * List all the enrolees
   */
  public list(): Observable<any> {
    let url: string = `${environment.server}${environment.enrollees}`;
    console.log(url);
    return this.http.get<any>(
      url, this.getHeader()
    );
  }

  /**
   * Update enrolee
   */
  public update(enrollee): Observable<any> {
    console.log(enrollee);
    let url: string = `${environment.server}${environment.enrollees}/${enrollee.id}`;
    let body = {'name': enrollee.name, 'active': enrollee.active};
    return this.http.put<any>(
      url, body, this.getHeader()
    );
  }

  /**
   * Header info for http related communications
   */
  private getHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Count } from './count'

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getCounts(): Observable<Count[]> {
    console.log('getCounts called from db-service.service')
    return this.http.get<Count[]>('http://localhost:8000/')
  }

  postCounts(count: Count): Observable<Count> {
    console.log(count+`called from db-service`)
    return this.http.post<Count>('http://localhost:8000/', count, this.httpOptions)
  }

  deleteCount(id) {
    console.log(`${id} deleteCount called from db-service`)
    return this.http.delete(`http://localhost:8000/${id}`, this.httpOptions)
  }

  updateCount(update) {
    console.log(`updateCount called from db-service on id ${update.id}`)
    return this.http.patch(`http://localhost:8000/${update.id}`, update, this.httpOptions)
  }

}

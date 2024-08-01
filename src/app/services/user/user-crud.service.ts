import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralId } from '../../utils/user.interfaces';
import { API_BASE_URL } from '../../utils/api.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  constructor(private http : HttpClient) { }

  getUser(id : GeneralId) : Observable<object> {
    const params = new HttpParams().set('Id', id.Id);
    return this.http.get<Observable<object>>(`${API_BASE_URL}/api/v1/user/${id.Id}`)
  }
}

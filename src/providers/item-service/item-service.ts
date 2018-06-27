import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../app/models/item';

@Injectable()
export class ItemServiceProvider {

  public apiUrl:string = 'http://localhost:8080/api';

  constructor(private _http: HttpClient) {
  }

  lista(): Observable<Item[]>{
    return this._http.get<Item[]>(this.apiUrl.concat('/carro/listaTodos'));
  }

}

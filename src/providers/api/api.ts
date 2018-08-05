import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
  private url:string = 'http://192.168.15.17:8080/api';

  getUrl(): string {
    return this.url;
  }

}

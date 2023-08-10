import { Injectable } from '@angular/core';
import { config } from './config/config';
import { SharedService } from './shared-service.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    public sharedService: SharedService
  ) { }

login(data) {
  const url = config.login;
  return this.sharedService.postData(url, data);
}
signup(data) {
  const url = config.register;
  return this.sharedService.postData(url, data);
}
}

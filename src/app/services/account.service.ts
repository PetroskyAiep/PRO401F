import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  register(userCredentials:any){
  
    this.http.post('${URL}"/api/Account/register', userCredentials).subscribe({
      next: resp => {
        console.log(resp);
      },
      error: err => {
        console.log(err);
      }

    });
  }

  loginUser(userCredentials:any){
    return this.http.post('${URL}/api/Account/login', userCredentials);
  }

}

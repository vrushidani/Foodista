import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { User } from '../shared/model/User';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/url';
import { ToastrService } from 'ngx-toastr';

const USER_KEY='';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable : Observable<User>;
  constructor(private httpClient : HttpClient, private toastrservice :ToastrService) { 
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin : IUserLogin):Observable<User>{
    return this.httpClient.post<User>(USER_LOGIN_URL, userLogin).pipe(tap({
      next:(user)=>{
        this.setUserToLocalStorage(user);
        this.toastrservice.success(`Welcome to Foodista ${user.name}!`,'Login Successful !')
      },
      error:(errorResponse)=>{
        this.toastrservice.error(errorResponse.error,'Login Failed!s')

      }
    }))
  }

  logout(){
     this.userSubject.next(new User());
     localStorage.removeItem(USER_KEY);
     window.location.reload();
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY,JSON.stringify(user))
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson)
      return JSON.parse(userJson) as User;
    else
      return new User();
  }
}

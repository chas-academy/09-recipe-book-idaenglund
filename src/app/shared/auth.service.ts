import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

const API_URL = environment.api_url;

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) {}

  login(username: string, password: string) {
    return this.http
      .post<any>(`${API_URL}/auth/login`, {
        email: username,
        password: password
      })
      .map(user => {
        if (user && user.data.access_token) {
          localStorage.setItem("currentUser", JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate(["/login"]);
  }

  register(name: string, email: string, password: string) {
    return this.http
      .post<any>(`${API_URL}/auth/register`, {
        name: name,
        email: email,
        password: password
      })
      .map(user => {
        // redirect user to /
        this.router.navigate(["/"]);
      });
  }

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user && !this.jwtHelper.isTokenExpired(user.data.access_token)) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    return user ? user.data.user_id : null;
  }
}

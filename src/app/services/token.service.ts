import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { UserData } from "../userdata";
import { TokenData } from "../tokendata";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor(private _http: HttpClient) {}

  getToken(userData: UserData) {
    const getTokenUrl = "http://localhost:8080/oauth/token";
    const getTokenParams: HttpParams = new HttpParams()
      .append("grant_type", "password")
      .append("username", userData.username)
      .append("password", userData.password);

    const getTokenHeaders: HttpHeaders = new HttpHeaders().append(
      "Authorization",
      "Basic " + btoa("client:secret")
    );

    return this._http.post<TokenData>(
      getTokenUrl,
      {
        withCredentials: true
      },
      {
        headers: getTokenHeaders,
        params: getTokenParams
      }
    );
  }
}

import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenService } from "./services/token.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "projectfrontend";

  constructor(private _http: HttpClient, private tokenService: TokenService) {}
}

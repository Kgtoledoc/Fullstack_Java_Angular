import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "../services/token.service";
import { Router } from "@angular/router";
import { UserData } from "../userdata";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData: UserData = new UserData();

  error: boolean = false;
  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (
      this.userData.username.length > 0 &&
      this.userData.password.length > 0
    ) {
      this.tokenService.getToken(this.userData).subscribe(
        res => {
          res.expires_in = new Date().getTime() + res.expires_in * 1000;
          sessionStorage.setItem("jsessionid", JSON.stringify(res));
          this.router.navigateByUrl("/home");
        },
        error => (this.error = true)
      );
    }
  }
}

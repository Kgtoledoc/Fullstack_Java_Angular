import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TokenService } from "./services/token.service";
import { AddtaskComponent } from "./addtask/addtask.component";
import { LoginComponent } from "./login/login.component";
import { TasklistComponent } from "./tasklist/tasklist.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TodoService } from "./services/todo.service";

const appRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    LoginComponent,
    TasklistComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [TokenService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}

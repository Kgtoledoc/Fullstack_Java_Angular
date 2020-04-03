import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todoList = [];

  constructor(private http: HttpClient) {}

  load() {
    const token = JSON.parse(sessionStorage.getItem("jsessionid"));

    if (token != null || token.expires_in < new Date().getTime()) {
      const getTokenUrl = "http://localhost:8080/getTasks";
      const getTokenHeaders: HttpHeaders = new HttpHeaders().append(
        "Authorization",
        "Bearer" + token.access_token
      );

      this.http
        .post(
          getTokenUrl,
          {
            withCredentials: true
          },
          {
            headers: getTokenHeaders
          }
        )
        .subscribe(res => {
          console.log(res);
          for (let i = 0; ; i++) {
            if (res[i] == null) {
              break;
            }
            this.todoList.unshift(res[i].tasks);
          }
        });
    }
  }

  addItem(task: string, token: string) {
    this.todoList.unshift(task);

    const getTokenUrl = "http://localhost:8080/insertTask";

    const getTokenParams: HttpParams = new HttpParams().append("task", task);

    const getTokenHeaders: HttpHeaders = new HttpHeaders().append(
      "Authorization",
      "Bearer" + token
    );

    return this.http.post(
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

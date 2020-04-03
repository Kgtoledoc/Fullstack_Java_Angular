import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-addtask",
  templateUrl: "./addtask.component.html",
  styleUrls: ["./addtask.component.css"]
})
export class AddtaskComponent implements OnInit {
  item: string;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  add() {
    this.todoService
      .addItem(
        this.item,
        JSON.parse(sessionStorage.getItem("jsessionid")).access_token
      )
      .subscribe(res => console.log(res));
    console.log(this.item);
    this.item = "";
  }
}

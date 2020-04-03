import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-tasklist",
  templateUrl: "./tasklist.component.html",
  styleUrls: ["./tasklist.component.css"]
})
export class TasklistComponent implements OnInit {
  //todoList: Array<any>;

  constructor(public todoService: TodoService) {
    todoService.load();
    //this.todoList = this.todoService.todoList;
  }

  ngOnInit(): void {}
}

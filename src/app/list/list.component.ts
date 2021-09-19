import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent {

  public textTask: string = "";
  public taskTrue: string[] = localStorage.getItem("taskTrue")?.split(" ") || [];
  public tasks: string[] = localStorage.getItem("Tasks")?.split(" ") || [];


  public addToTasks() {
    if (this.textTask.length > 0) {
      this.tasks.push(this.textTask);
      this.taskTrue.push('false');
      localStorage.setItem("Tasks", this.tasks.join(" "));
      localStorage.setItem("taskTrue", this.taskTrue.join(" "));
      this.textTask = "";
    }
    else {
      alert("Введите свое задание");
    }
  }

  public removeThisTask(index: number) {
    this.tasks.splice(index, 1);
    this.taskTrue.splice(index, 1);
    localStorage.setItem("Tasks", this.tasks.join(" "));
    localStorage.setItem("taskTrue", this.taskTrue.join(" "));
  }

  public compliteListItem(index: number) {
    if (this.taskTrue[index] === "false") {
      this.taskTrue[index] = "true";
    } else {
      this.taskTrue[index] = "false"
    }
    localStorage.setItem("taskTrue", this.taskTrue.join(" "));
  }
}

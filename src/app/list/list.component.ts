import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent {

  public textTask: string = "";
  public taskTrue: boolean[] = [];
  public tasks: string[] = [];

  public addToTasks() {
    if (this.textTask.length > 0) {
      this.tasks.push(this.textTask);
      this.taskTrue.push(false);
      this.textTask = "";
    }
    else {
      alert("Введите свое задание");
    }
  }

  public removeThisTask(index: number) {
    this.tasks.splice(index, 1);
    console.log(this.taskTrue[index])
    this.taskTrue.splice(index, 1);
  }
}

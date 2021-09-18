import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor() { }
  textTask:string= "";

  tasks:string[] =new Array();

  ngOnInit(): void {
  }

  addToTasks(text:string){
    this.tasks.push(this.textTask);
    this.textTask=""
  }

  removeThisTask(index:number){
    this.tasks.splice(index,1);
  }

  inputOn(value:string){
    this.textTask =value;
  }
}

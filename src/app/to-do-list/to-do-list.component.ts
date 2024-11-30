import { Component, OnInit } from '@angular/core';
import { ToDoService, ToDo } from '../to-do.service';
import {ToDoItemComponent} from '../to-do-item/to-do-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  standalone: true,
  imports: [
    ToDoItemComponent,
    NgForOf
  ],
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoList: ToDo[] = [];

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDoService.getToDoList().subscribe((data: ToDo[]) => {
      this.toDoList = data;
    });
  }

  toggleCompletion(id: number): void {
    this.toDoService.toggleCompletion(id);
  }
}

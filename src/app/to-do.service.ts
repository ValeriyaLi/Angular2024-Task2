import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private toDoList: ToDo[] = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Finish Angular project', completed: true },
    { id: 3, title: 'Read a book', completed: false },
  ];

  constructor() { }


  getToDoList(): Observable<ToDo[]> {
    return of(this.toDoList);
  }


  toggleCompletion(id: number): void {
    const toDo = this.toDoList.find(item => item.id === id);
    if (toDo) {
      toDo.completed = !toDo.completed;
    }
  }
}

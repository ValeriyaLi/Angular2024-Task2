import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../to-do.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  standalone: true,
  imports: [
    NgClass
  ],
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {

  @Input() toDo!: ToDo;
  @Output() toggle: EventEmitter<number> = new EventEmitter();

  onToggle(): void {
    this.toggle.emit(this.toDo.id);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoListComponent } from './to-do-list.component';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { ToDoService } from '../to-do.service';
import { of } from 'rxjs';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToDoListComponent, ToDoItemComponent],
      providers: [
        { provide: ToDoService, useValue: { getToDoList: () => of([{ id: 1, title: 'Test', completed: false }]) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the to-do list', () => {
    const list = fixture.nativeElement.querySelectorAll('li');
    expect(list.length).toBe(1);
  });
});

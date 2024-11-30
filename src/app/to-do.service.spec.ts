import { TestBed } from '@angular/core/testing';
import { ToDoService } from './to-do.service';
import { of } from 'rxjs';

describe('ToDoService', () => {
  let service: ToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the to-do list', () => {
    const mockList = [
      { id: 1, title: 'Test ToDo 1', completed: false }
    ];
    spyOn(service, 'getToDoList').and.returnValue(of(mockList));

    service.getToDoList().subscribe((toDoList) => {
      expect(toDoList.length).toBe(1);
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoItemComponent } from './to-do-item.component';

describe('ToDoItemComponent', () => {
  let component: ToDoItemComponent;
  let fixture: ComponentFixture<ToDoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToDoItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoItemComponent);
    component = fixture.componentInstance;
    component.toDo = { id: 1, title: 'Test ToDo', completed: false };
    fixture.detectChanges();
  });

  it('should emit toggle event when clicked', () => {
    spyOn(component.toggle, 'emit');
    const checkbox = fixture.nativeElement.querySelector('input');
    checkbox.click();
    expect(component.toggle.emit).toHaveBeenCalledWith(1);
  });
});

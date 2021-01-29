import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewTodoComponent } from './addnew-todo.component';

describe('AddnewTodoComponent', () => {
  let component: AddnewTodoComponent;
  let fixture: ComponentFixture<AddnewTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

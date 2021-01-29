import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTodosComponent } from './content-todos.component';

describe('ContentTodosComponent', () => {
  let component: ContentTodosComponent;
  let fixture: ComponentFixture<ContentTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

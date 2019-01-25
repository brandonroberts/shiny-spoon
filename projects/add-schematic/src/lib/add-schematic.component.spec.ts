import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchematicComponent } from './add-schematic.component';

describe('AddSchematicComponent', () => {
  let component: AddSchematicComponent;
  let fixture: ComponentFixture<AddSchematicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSchematicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

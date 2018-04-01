import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUiElementsComponent } from './test-ui-elements.component';

describe('TestUiElementsComponent', () => {
  let component: TestUiElementsComponent;
  let fixture: ComponentFixture<TestUiElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUiElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUiElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

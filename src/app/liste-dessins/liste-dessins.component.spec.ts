import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDessinsComponent } from './liste-dessins.component';

describe('ListeDessinsComponent', () => {
  let component: ListeDessinsComponent;
  let fixture: ComponentFixture<ListeDessinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeDessinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeDessinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

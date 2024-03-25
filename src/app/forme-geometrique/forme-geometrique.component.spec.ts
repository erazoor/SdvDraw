import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeGeometriqueComponent } from './forme-geometrique.component';

describe('FormeGeometriqueComponent', () => {
  let component: FormeGeometriqueComponent;
  let fixture: ComponentFixture<FormeGeometriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormeGeometriqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormeGeometriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

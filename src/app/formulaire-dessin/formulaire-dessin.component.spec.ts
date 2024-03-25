import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDessinComponent } from './formulaire-dessin.component';

describe('FormulaireDessinComponent', () => {
  let component: FormulaireDessinComponent;
  let fixture: ComponentFixture<FormulaireDessinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireDessinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireDessinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

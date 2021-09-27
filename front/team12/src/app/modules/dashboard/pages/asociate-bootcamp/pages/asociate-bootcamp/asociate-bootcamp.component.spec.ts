import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociateBootcampComponent } from './asociate-bootcamp.component';

describe('AsociateBootcampComponent', () => {
  let component: AsociateBootcampComponent;
  let fixture: ComponentFixture<AsociateBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociateBootcampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociateBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

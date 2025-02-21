import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostaddComponent } from './jobpostadd.component';

describe('JobpostaddComponent', () => {
  let component: JobpostaddComponent;
  let fixture: ComponentFixture<JobpostaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobpostaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobpostaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

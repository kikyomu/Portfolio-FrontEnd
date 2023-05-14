import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBackEndComponent } from './skills-back-end.component';

describe('SkillsBackEndComponent', () => {
  let component: SkillsBackEndComponent;
  let fixture: ComponentFixture<SkillsBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsBackEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

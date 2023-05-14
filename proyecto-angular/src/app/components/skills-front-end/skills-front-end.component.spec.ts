import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFrontEndComponent } from './skills-front-end.component';

describe('SkillsFrontEndComponent', () => {
  let component: SkillsFrontEndComponent;
  let fixture: ComponentFixture<SkillsFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsFrontEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
